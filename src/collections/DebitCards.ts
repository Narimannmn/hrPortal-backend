import { CollectionConfig } from 'payload/types'

const DebitCardData: CollectionConfig = {
	slug: 'debit-card-data',
	labels: {
		singular: 'Дебетовая карта',
		plural: 'Дебетовые карты',
	},
	access: {
		read: () => true,
	},
	endpoints: [
		{
			path: '/lists',
			method: 'get',
			handler: async (req, res, next) => {
				try {
					const { page = 1, limit = 10 } = req.query
					const results = await req.payload.find({
						collection: 'debit-card-data',
						depth: 0,
						page: parseInt(page as string, 10),
						limit: parseInt(limit as string, 10),
					})

					const keys = results.docs.map(doc => doc.key)
					return res.status(200).json({
						keys,
						totalDocs: results.totalDocs,
						limit: results.limit,
						totalPages: results.totalPages,
						page: results.page,
						pagingCounter: results.pagingCounter,
						hasPrevPage: results.hasPrevPage,
						hasNextPage: results.hasNextPage,
						prevPage: results.prevPage,
						nextPage: results.nextPage,
					})
				} catch (error) {
					console.error('Ошибка при получении данных дебетовых карт:', error)
					return res.status(500).json({ error: 'Internal Server Error' })
				}
			},
		},
	],
	fields: [
		{
			name: 'key',
			label: 'Название дебетовой карты',
			type: 'text',
		},
		{
			name: 'list',
			type: 'array',
			label: 'Список дебетовых карт',
			required: true,
			fields: [
				{
					name: 'imageSource',
					label: 'Изображение карты',
					type: 'upload',
					relationTo: 'media',
					required: true,
				},
				{
					name: 'cardTitle',
					label: 'Название карты',
					type: 'text',
					required: true,
				},
				{
					name: 'cardSubtitle',
					label: 'Подзаголовок карты',
					type: 'textarea',
					required: true,
				},
				{
					name: 'tableData',
					label: 'Данные таблицы',
					type: 'array',
					maxRows: 3,
					required: true,
					fields: [
						{
							name: 'title',
							label: 'Заголовок колонки',
							type: 'text',
							required: true,
						},
						{
							name: 'subtitle',
							label: 'Подзаголовок колонки',
							type: 'text',
							required: true,
						},
					],
				},
			],
		},
	],
}

export default DebitCardData
