import { Block } from 'payload/types'

export const guaranteeTypeCard: Block = {
	slug: 'guaranteeTypeCard',
	labels: {
		singular: 'Карточка для показа подходящего вида',
		plural: 'Карточки для показа подходящего вида',
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
			name: 'guarantees',
			label: 'Гарантии',
			type: 'array',
			fields: [
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
					name: 'description',
					label: 'Описание',
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Описание (Рус)',
							type: 'text',
							defaultValue: 'Заголовок',
						},
						{
							name: 'labelEn',
							label: 'Описание (En)',
							type: 'text',
							defaultValue: 'Заголовок',
						},
						{
							name: 'labelKz',
							label: 'Описание (Қаз)',
							type: 'text',
							defaultValue: 'Заголовок',
						},
					],
				},
				{
					name: 'details',
					label: 'Детали',
					type: 'array',
					minRows: 1,
					maxRows: 3,
					fields: [
						{
							name: 'label',
							label: 'Метка',
							type: 'group',
							fields: [
								{
									name: 'labelRu',
									label: 'Метка (Рус)',
									type: 'text',
									required: true,
									defaultValue: 'Заголовок',
								},
								{
									name: 'labelEn',
									label: 'Метка (En)',
									type: 'text',
									required: true,
									defaultValue: 'Заголовок',
								},
								{
									name: 'labelKz',
									label: 'Метка (Қаз)',
									type: 'text',
									required: true,
									defaultValue: 'Заголовок',
								},
							],
						},
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
									defaultValue: 'Заголовок',
								},
								{
									name: 'labelEn',
									label: 'Значение (En)',
									type: 'text',
									required: true,
									defaultValue: 'Заголовок',
								},
								{
									name: 'labelKz',
									label: 'Значение (Қаз)',
									type: 'text',
									required: true,
									defaultValue: 'Заголовок',
								},
							],
						},
					],
				},
				{
					name: 'image',
					label: 'Изображение',
					type: 'upload',
					relationTo: 'media',
					required: true,
				},
			],
			required: true,
		},
	],
}
