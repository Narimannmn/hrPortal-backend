import { Block } from 'payload/types'

export const NumeratedCard: Block = {
	slug: 'NumeratedCard',
	labels: {
		singular: 'Numerated Card Block',
		plural: 'Numerated Card Blocks',
	},
	fields: [
		{
			name: 'heading',
			label: 'Заголовок',
			type: 'text',
			required: true,
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
					type: 'text',
					required: true,
				},
				{
					name: 'description',
					label: 'Описание карты',
					type: 'text',
					required: true,
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
