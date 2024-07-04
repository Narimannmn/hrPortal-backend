import { Block } from 'payload/types'

export const advantageCard: Block = {
	slug: 'advantageCard',
	labels: {
		singular: 'Advantage Block',
		plural: 'Advantages Blocks',
	},
	fields: [
		{
			name: 'heading',
			label: 'Заголовок',
			type: 'text',
			required: true,
		},
		{
			name: 'advantages',
			label: 'Преимущества',
			type: 'array',
			fields: [
				{
					name: 'image',
					label: 'Изображение',
					type: 'upload',
					relationTo: 'media',
					required: true,
				},
				{
					name: 'title',
					label: 'Заголовок',
					type: 'text',
					required: true,
				},
				{
					name: 'description',
					label: 'Описание',
					type: 'text',
					required: true,
				},
			],
			required: true,
		},
	],
}
