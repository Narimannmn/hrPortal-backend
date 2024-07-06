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
					label: 'Описание',
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Описание (Рус)',
							type: 'text',
						},
						{
							name: 'labelEn',
							label: 'Описание (En)',
							type: 'text',
						},
						{
							name: 'labelKz',
							label: 'Описание (Қаз)',
							type: 'text',
						},
					],
				},
			],
			required: true,
		},
	],
}
