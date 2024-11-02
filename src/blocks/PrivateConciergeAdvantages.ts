import { Block } from 'payload/types'

const PrivateConciergeAdvantages: Block = {
	slug: 'PrivateConciergeAdvantages',
	labels: {
		singular: 'Консьерж карточки "Преимущества" c разной шириной',
		plural: 'Консьерж карточки "Преимущества" c разной шириной',
	},
	fields: [
		{
			name: 'cards',
			label: 'Карточки',
			type: 'array',
			fields: [
				{
					name: 'columnFr',
					label: 'Ширина карточки',
					type: 'radio',
					required: false,
					defaultValue: "1fr",
					options: [
						{
							label: '1fr',
							value: '1fr',
						},
						{
							label: '2fr',
							value: '2fr',
						},
					]
				},
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
							name: 'labelKz',
							label: 'Подзаголовок (Kz)',
							type: 'richText',
							required: true,
						},
						{
							name: 'labelRu',
							label: 'Подзаголовок (Ru)',
							type: 'richText',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Подзаголовок (En)',
							type: 'richText',
							required: true,
						},
					],
				},
			],
		}
	],
}

export default PrivateConciergeAdvantages
