import { Block } from 'payload/types'

export const optionalCard: Block = {
	slug: 'optionalCard',
	labels: {
		singular: 'Optional Block',
		plural: 'Optional Blocks',
	},
	fields: [
		{
			name: 'heading',
			label: 'Заголовок',
			type: 'text',
			required: true,
		},
		{
			name: 'items',
			label: 'Элементы',
			type: 'array',
			minRows: 2,
			maxRows: 3,
			fields: [
				{
					name: 'icon',
					label: 'Иконка',
					type: 'upload',
					relationTo: 'icons',
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
					required: false,
				},
			],
			required: true,
		},
	],
}
