import cors from 'cors'
import express from 'express'
import payload from 'payload'
import { UAParser } from 'ua-parser-js'
import busboy from 'busboy'
import fs from 'fs'
import path from 'path'

require('dotenv').config()
const app = express()

app.use(
	cors({
		origin: '*',
		methods: 'GET,POST,PUT,DELETE,OPTIONS',
		allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
		credentials: true,
	})
)

app.get('/', (_, res) => {
	res.redirect('/admin')
})

const start = async () => {
	await payload.init({
		secret: process.env.PAYLOAD_SECRET,
		express: app,
		onInit: async () => {
			payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
		},
	})

	app.get('/api/jobsByGroup', async (req, res) => {
		try {
			const { jobGroupId } = req.query

			if (!jobGroupId) {
				return res.status(400).json({ error: 'jobGroupId is required' })
			}

			const jobs = await payload.find({
				collection: 'jobs',
				where: {
					jobGroup: {
						equals: jobGroupId,
					},
				},
			})
			res.status(200).json(jobs.docs)
		} catch (error) {
			res.status(500).json({ error: error.message })
		}
	})	

	app.post('/api/jobResponses', async (req, res) => {
		try {
			const { lastName, firstName, phone, resume, selectedVacation } = req.body

			// Validate the fields
			if (!lastName || !firstName || !phone || !resume || !selectedVacation) {
				return res.status(400).json({ error: 'All fields are required.' })
			}
			const base64Data = resume.replace(/^data:application\/pdf;base64,/, '') // Remove base64 header
			const buffer = Buffer.from(base64Data, 'base64')
			console.log(buffer)
			const mediaFile = await payload.create({
				collection: 'media',
				data: {
					alt: `Resume for ${firstName} ${lastName}`, // Alt text for the file
					filename: `${firstName}-${lastName}-resume.pdf`, // File name (no spaces)
				},
			})

			// Step 2: Create the Job Response and associate the media file
			const jobResponse = await payload.create({
				collection: 'job-responses',
				data: {
					lastName,
					firstName,
					phone,
					resume: mediaFile, 
					job: selectedVacation,
				},
			})

			res.status(201).json(jobResponse)
		} catch (error) {
			console.error(error)
			res.status(500).json({ error: error.message })
		}
	})



	app.listen(4000, () => {
		console.log('Server is running on port 4000')
	})
}

start()
