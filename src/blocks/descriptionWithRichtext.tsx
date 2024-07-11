import { Block } from 'payload/types'

export const descriptionWithRichtext: Block = {
	slug: 'descriptionWithRichtext',
	labels: {
		singular: 'Блок с информацией',
		plural: 'Блок с информациями',
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
				},
				{
					name: 'labelEn',
					label: 'Заголовок (En)',
					type: 'text',
				},
				{
					name: 'labelKz',
					label: 'Заголовок (Қаз)',
					type: 'text',
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
			name: 'richText',
			label: 'Текст',
			type: 'group',
			fields: [
				{
					name: 'labelRu',
					label: 'Текст (Рус)',
					type: 'richText',
					required: true,
				},
				{
					name: 'labelEn',
					label: 'Текст (En)',
					type: 'richText',
					required: true,
				},
				{
					name: 'labelKz',
					label: 'Текст (Қаз)',
					type: 'richText',
					required: true,
				},
			],
		},
	],
}
