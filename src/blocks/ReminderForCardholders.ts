import { Block } from 'payload/types'

const ReminderForCardholders: Block = {
	slug: 'ReminderForCardholders',
	labels: {
		singular: 'Памятка для держателей карты',
		plural: 'Памятка для держателей карты',
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
							label: 'Значение (Рус)',
							type: 'richText',
						},
						{
							name: 'labelEn',
							label: 'Значение (En)',
							type: 'richText',
						},
						{
							name: 'labelKz',
							label: 'Значение (Қаз)',
							type: 'richText',
						},
					],
				},
			],
		}
	],
}

export default ReminderForCardholders
