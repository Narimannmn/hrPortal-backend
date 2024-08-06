import { Block } from 'payload/types'

export const tariffCard: Block = {
	slug: 'tariffCard',
	labels: {
		singular: 'Карточка тарифа',
		plural: 'Карточки тарифов',
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
			name: 'rates',
			label: 'Тарифы',
			type: 'array',
			minRows: 2,
			maxRows: 4,
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
					name: 'titleTooltipEnabled',
					label: 'Включить тултип для заголовка',
					type: 'checkbox',
				},
				{
					name: 'titleTooltip',
					label: 'Тултип заголовка',
					type: 'group',
					admin: {
						condition: (_, siblingData) => siblingData.titleTooltipEnabled,
					},
					fields: [
						{
							name: 'labelRu',
							label: 'Тултип (Рус)',
							type: 'richText',
						},
						{
							name: 'labelEn',
							label: 'Тултип (En)',
							type: 'richText',
						},
						{
							name: 'labelKz',
							label: 'Тултип (Қаз)',
							type: 'richText',
						},
					],
				},
				{
					name: 'items',
					label: 'Элементы',
					type: 'array',
					fields: [
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
							name: 'descriptionTooltipEnabled',
							label: 'Включить тултип для описания',
							type: 'checkbox',
						},
						{
							name: 'descriptionTooltip',
							label: 'Тултип описания',
							type: 'group',
							admin: {
								condition: (_, siblingData) =>
									siblingData.descriptionTooltipEnabled,
							},
							fields: [
								{
									name: 'labelRu',
									label: 'Тултип (Рус)',
									type: 'richText',
								},
								{
									name: 'labelEn',
									label: 'Тултип (En)',
									type: 'richText',
								},
								{
									name: 'labelKz',
									label: 'Тултип (Қаз)',
									type: 'richText',
								},
							],
						},
						{
							name: 'price',
							label: 'Цена',
							type: 'group',
							fields: [
								{
									name: 'labelRu',
									label: 'Цена (Рус)',
									type: 'text',
									required: true,
								},
								{
									name: 'labelEn',
									label: 'Цена (En)',
									type: 'text',
									required: true,
								},
								{
									name: 'labelKz',
									label: 'Цена (Қаз)',
									type: 'text',
									required: true,
								},
							],
						},
					],
				},
			],
		},
		{
			name: 'mainCard',
			label: 'Основная карточка',
			type: 'group',
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
					name: 'image',
					label: 'Изображение',
					type: 'upload',
					relationTo: 'media',
					required: true,
				},
			],
		},
	],
}
