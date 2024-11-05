import cors from 'cors'
import express from 'express'
import payload from 'payload'
import { UAParser } from 'ua-parser-js'

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

	app.get('/api/utm/:slug', async (req, res) => {
		const { slug } = req.params

		if (!req.payload) {
			return res.status(500).send('Payload service not available')
		}

		const userAgentString = req.get('User-Agent')
		let parser = new UAParser(userAgentString)
		let parserResults = parser.getResult()

		const linkDocs = await req.payload.find({
			collection: 'trackedLinks',
			where: { slug: { equals: slug } },
		})

		if (!linkDocs.docs || linkDocs.docs.length === 0) {
			return res.status(404).send('Link not found')
		}

		const trackedLink = linkDocs.docs[0]

		const params = new URL(trackedLink.href.toString()).searchParams

		const utms = {
			utm_source: params.get('utm_source'),
			utm_medium: params.get('utm_medium'),
			utm_campaign: params.get('utm_campaign'),
			utm_content: params.get('utm_content'),
			utm_term: params.get('utm_term'),
		}

		await req.payload.create({
			collection: 'trackedLinksClicks',
			data: {
				trackedLink: trackedLink.id,
				browser: parserResults.browser.name,
				device: parserResults.device,
				os: parserResults.os.name,
				utms,
			},
		})

		return res.json(trackedLink.href.toString())
	})

	app.get('/api/marketplace-data', async (req, res) => {
		try {
			const categories = await payload.find({
				collection: 'marketplace_categories',
				limit: 1000,
			})

			const regions = await payload.find({
				collection: 'marketplace_regions',
				limit: 1000,
			})

			const services = await payload.find({
				collection: 'marketplace_services',
				limit: 1000,
			})

			res.status(200).json({
				categories: categories.docs,
				regions: regions.docs,
				services: services.docs,
			})
		} catch (error) {
			console.error('Ошибка при получении данных маркетплейса:', error)
			res.status(500).json({ error: 'Не удалось получить данные маркетплейса' })
		}
	})

	app.listen(4000, () => {
		console.log('Server is running on port 4000')
	})
}

start()
