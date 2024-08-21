import { Block } from 'payload/types'

export const table: Block = {
	slug: 'table',
	labels: {
		singular: 'Простая таблица',
		plural: 'Простые таблицы',
	},
	fields: [
		{
			name: 'headers',
			label: 'Заголовки столбцов',
			type: 'array',
			fields: [
				{
					name: 'label',
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
			],
			required: true,
		},
		{
			name: 'rows',
			label: 'Строки',
			type: 'array',
			minRows: 1,
			fields: [
				{
					name: 'cells',
					label: 'Ячейки',
					type: 'array',
					fields: [
						{
							name: 'value',
							label: 'Значение',
							type: 'group',
							fields: [
								{
									name: 'labelRu',
									label: 'Значение (Рус)',
									type: 'text',
									required: true,
								},
								{
									name: 'labelEn',
									label: 'Значение (En)',
									type: 'text',
									required: true,
								},
								{
									name: 'labelKz',
									label: 'Значение (Қаз)',
									type: 'text',
									required: true,
								},
							],
						},
					],
					required: true,
				},
			],
			required: true,
		},
	],
}
