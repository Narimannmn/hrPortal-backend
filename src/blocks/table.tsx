import { Block } from 'payload/types'

export const table: Block = {
	slug: 'table',
	labels: {
		singular: 'Простая таблица',
		plural: 'Простые таблицы',
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
					defaultValue: 'Заголовок',
				},
				{
					name: 'labelEn',
					label: 'Заголовок (En)',
					type: 'text',
					required: true,
					defaultValue: 'Заголовок',
				},
				{
					name: 'labelKz',
					label: 'Заголовок (Қаз)',
					type: 'text',
					required: true,
					defaultValue: 'Заголовок',
				},
			],
		},
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
							defaultValue: 'Заголовок',
						},
						{
							name: 'labelEn',
							label: 'Заголовок (En)',
							type: 'text',
							required: true,
							defaultValue: 'Заголовок',
						},
						{
							name: 'labelKz',
							label: 'Заголовок (Қаз)',
							type: 'text',
							required: true,
							defaultValue: 'Заголовок',
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
									defaultValue: 'Значение',
								},
								{
									name: 'labelEn',
									label: 'Значение (En)',
									type: 'text',
									required: true,
									defaultValue: 'Значение',
								},
								{
									name: 'labelKz',
									label: 'Значение (Қаз)',
									type: 'text',
									required: true,
									defaultValue: 'Значение',
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
