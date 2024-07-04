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
					name: 'pageSlug',
					label: 'Страница',
					type: 'relationship',
					relationTo: 'pages',
					required: false,
					admin: {
						condition: (data, siblingData) => siblingData.linkType === 'page',
					},
				},
				{
					name: 'customLink',
					label: 'Произвольная ссылка',
					type: 'text',
					required: false,
					admin: {
						condition: (data, siblingData) => siblingData.linkType === 'custom',
					},
				},
			],
		},
	],
	hooks: {
		beforeChange: [
			async ({ data, req }) => {
				if (data.links) {
					for (const link of data.links) {
						if (link.linkType === 'page' && link.pageSlug) {
							const page = await req.payload.findByID({
								collection: 'pages',
								id: link.pageSlug,
								depth: 0,
							})
							link.pageSlug = page.slug
						}
					}
				}
			},
		],
	},
}

export default SecondaryMenu
