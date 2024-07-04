import { CollectionConfig } from 'payload/types'

const SecondaryMenu: CollectionConfig = {
	slug: 'secondary-menu',
	labels: {
		singular: 'Вторичное меню',
		plural: 'Вторичное меню',
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'labels',
			label: 'Названия',
			type: 'group',
			fields: [
				{
					name: 'labelRu',
					label: 'Название (Ru)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelEn',
					label: 'Название (En)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelKz',
					label: 'Название (Kz)',
					type: 'text',
					required: true,
				},
			],
		},
		{
			name: 'links',
			label: 'Ссылки',
			type: 'array',
			fields: [
				{
					name: 'linkLabels',
					label: 'Названия',
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Название (Ru)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Название (En)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelKz',
							label: 'Название (Kz)',
							type: 'text',
							required: true,
						},
					],
				},
				{
					name: 'linkType',
					label: 'Тип ссылки',
					type: 'select',
					options: [
						{
							label: 'Страница',
							value: 'page',
						},
						{
							label: 'Произвольная ссылка',
							value: 'custom',
						},
					],
					required: true,
				},
				{
					name: 'page',
					label: 'Страница',
					type: 'relationship',
					relationTo: 'pages',
					admin: {
						condition: (data, siblingData) => siblingData.linkType === 'page',
					},
				},
				{
					name: 'customLink',
					label: 'Произвольная ссылка',
					type: 'text',
					admin: {
						condition: (data, siblingData) => siblingData.linkType === 'custom',
					},
				},
			],
		},
	],
	hooks: {
		afterRead: [
			async ({ doc, req }) => {
				const updatePageSlug = async pageId => {
					if (!pageId) return null
					const page = await req.payload.findByID({
						collection: 'pages',
						id: pageId,
						depth: 0,
					})
					return page?.slug || null
				}

				const processLinks = async links => {
					if (!links) return
					for (const link of links) {
						if (link.page && typeof link.page === 'object' && link.page.id) {
							link.pageSlug = await updatePageSlug(link.page.id)
							link.page = link.page.id
						}
					}
				}

				if (doc.links) {
					await processLinks(doc.links)
				}

				return doc
			},
		],
	},
}

export default SecondaryMenu
