import { Block } from 'payload/types'

const PrivateTravelCards: Block = {
	slug: 'PrivateTravelCards',
	labels: {
		singular: 'Карточки для путешествии',
		plural: 'Карточки для путешествии',
	},
	fields: [
		{
			name: 'cards',
			label: 'Карточки',
			type: 'array',
			fields: [
				{
					name: 'img',
					label: 'Изображение',
					type: 'upload',
					relationTo: 'media',
					required: true,
				},
				{
					name: 'title',
					label: 'Название',
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Название (Рус)',
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
							label: 'Название (Қаз)',
							type: 'text',
							required: true,
						},
					],
				},
				{
					name: 'description',
					label: 'Описание',
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Название (Рус)',
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
							label: 'Название (Қаз)',
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
					label: 'Ссылка на страницу',
					type: 'relationship',
					relationTo: 'pages',
					admin: {
						condition: (_, siblingData) => siblingData.linkType === 'page',
					},
				},
				{
					name: 'customLink',
					label: 'Произвольная ссылка',
					type: 'text',
					admin: {
						condition: (_, siblingData) => siblingData.linkType === 'custom',
					},
				},
			],
		}
	],
}

export default PrivateTravelCards
