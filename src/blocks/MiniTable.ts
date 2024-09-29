import { Block } from 'payload/types'

export const MiniTable: Block = {
	slug: 'MiniTable',
	labels: {
		singular: 'Мини таблица',
		plural: 'Мини таблица',
	},
	fields: [
		{
			name: 'content',
			type: 'array',
			label: 'Контент',
			fields: [
				{
					name: 'label',
					label: 'Ключ',
					type: 'group',
					fields: [
						{ name: 'labelKz', type: 'text', label: 'Казахский' },
						{ name: 'labelRu', type: 'text', label: 'Русский' },
						{ name: 'labelEn', type: 'text', label: 'Английский' },
					],
				},
				{
					name: 'value',
					label: 'Значение',
					type: 'group',
					fields: [
						{ name: 'labelKz', type: 'text', label: 'Казахский' },
						{ name: 'labelRu', type: 'text', label: 'Русский' },
						{ name: 'labelEn', type: 'text', label: 'Английский' },
					],
				},
			],
		},
	],
}
