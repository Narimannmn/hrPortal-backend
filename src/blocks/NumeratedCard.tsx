import { Block } from 'payload/types'

export const NumeratedCard: Block = {
	slug: 'numeratedCard',
	labels: {
		singular: 'Numerated Card Block',
		plural: 'Numerated Card Blocks',
	},
	fields: [
		{
			name: 'heading',
			label: 'Заголовок',
			type: 'group',
			fields: [
				{
					name: 'labelRu',
					label: 'Заголовок (Рус)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelEn',
					label: 'Заголовок (En)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelKz',
					label: 'Заголовок (Қаз)',
					type: 'text',
					required: true,
				},
			],
		},
		{
			name: 'cards',
			label: 'Карты',
			type: 'array',
			minRows: 3,
			maxRows: 5,
			fields: [
				{
					name: 'numberImage',
					label: 'Изображение номера',
					type: 'upload',
					relationTo: 'media',
					required: true,
				},
				{
					name: 'title',
					label: 'Заголовок карты',
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Заголовок (Рус)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Заголовок (En)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelKz',
							label: 'Заголовок (Қаз)',
							type: 'text',
							required: true,
						},
					],
				},
				{
					name: 'description',
					label: 'Описание карты',
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Описание (Рус)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Описание (En)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelKz',
							label: 'Описание (Қаз)',
							type: 'text',
							required: true,
						},
					],
				},
				{
					name: 'numberImageWidth',
					label: 'Ширина изображения номера',
					type: 'number',
					required: true,
				},
			],
		},
	],
}
