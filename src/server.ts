import cors from 'cors'
import express from 'express'
import payload from 'payload'

// Импортируем пакет cors

require('dotenv').config()
const app = express()

// Настройка CORS
app.use(
	cors({
		origin: 'http://localhost:3000', // URL вашего клиентского приложения
		methods: 'GET,POST,PUT,DELETE,OPTIONS',
		allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
		credentials: true,
	})
)

// Redirect root to Admin panel
app.get('/', (_, res) => {
	res.redirect('/admin')
})

const start = async () => {
	// Initialize Payload
	await payload.init({
		secret: process.env.PAYLOAD_SECRET,
		express: app,
		onInit: async () => {
			payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
		},
	})

	// Add your own express routes here
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
