import { Block } from 'payload/types'

export const descriptionWithRichtext: Block = {
	slug: 'descriptionWithRichtext',
	labels: {
		singular: 'Простая информация',
		plural: 'Простые информации',
	},
	fields: [
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
		{
			name: 'isWhiteBackground',
			label: 'Белый задний фон',
			type: 'checkbox',
			required: false,
		},
	],
}
