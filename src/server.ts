import cors from 'cors'
import express from 'express'
import payload from 'payload'

require('dotenv').config()
const app = express()

app.use(
	cors({
		origin: 'http://localhost:3000',
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

	app.get('/api/pages/:slug', async (req, res) => {
		const { slug } = req.params

		try {
			const response = await payload.find({
				collection: 'pages',
				where: { slug: { equals: slug } },
			})
			const pageData = response.docs[0]

			if (!pageData) {
				return res.status(404).json({ error: 'Page not found' })
			}

			res.status(200).json(pageData)
		} catch (error) {
			console.error('Error fetching page data', error)
			res.status(500).json({ error: 'Failed to fetch page data' })
		}
	})

	app.listen(4000, () => {
		console.log('Server is running on port 4000')
	})
}

start()
