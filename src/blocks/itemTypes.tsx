import { Block } from 'payload/types'

export const ItemTypes: Block = {
	slug: 'itemTypes',
	labels: {
		singular: 'Карточка товара',
		plural: 'Карточки товара',
	},
	fields: [
		{
			name: 'items',
			label: 'Товары',
			type: 'array',
			required: true,
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
							required: false,
						},
						{
							name: 'labelEn',
							label: 'Описание (En)',
							type: 'text',
							required: false,
						},
						{
							name: 'labelKz',
							label: 'Описание (Қаз)',
							type: 'text',
							required: false,
						},
					],
				},
				{
					name: 'characteristics',
					label: 'Характеристики',
					type: 'array',
					fields: [
						{
							name: 'label',
							label: 'Наименование характеристики',
							type: 'group',
							fields: [
								{
									name: 'labelRu',
									label: 'Наименование (Рус)',
									type: 'text',
									required: true,
								},
								{
									name: 'labelEn',
									label: 'Наименование (En)',
									type: 'text',
									required: true,
								},
								{
									name: 'labelKz',
									label: 'Наименование (Қаз)',
									type: 'text',
									required: true,
								},
							],
						},
						{
							name: 'value',
							label: 'Значение характеристики',
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
				{
					name: 'buttons',
					label: 'Кнопки',
					type: 'array',
					maxRows: 2,
					fields: [
						{
							name: 'label',
							label: 'Надпись кнопки',
							type: 'group',
							fields: [
								{
									name: 'labelRu',
									label: 'Надпись (Рус)',
									type: 'text',
									required: true,
								},
								{
									name: 'labelEn',
									label: 'Надпись (En)',
									type: 'text',
									required: true,
								},
								{
									name: 'labelKz',
									label: 'Надпись (Қаз)',
									type: 'text',
									required: true,
								},
							],
						},
						{
							name: 'variant',
							label: 'Тип кнопки',
							type: 'select',
							options: [
								{
									label: 'Розовый задний фон с белой надписью',
									value: 'primary',
								},
								{
									label: 'Белый задний фон с черной надписью',
									value: 'secondary',
								},
								{
									label: 'Прозрачный задний фон с розовой надписью',
									value: 'tertiary',
								},
								{
									label: 'Прозрачный задний фон с серой надписью',
									value: 'ghost',
								},
							],
							required: true,
						},
						{
							name: 'linkType',
							label: 'Тип ссылки',
							type: 'select',
							options: [
								{
									label: 'Произвольная ссылка',
									value: 'custom',
								},
								{
									label: 'Ссылка на страницу',
									value: 'page',
								},
							],
							required: true,
						},
						{
							name: 'customLink',
							label: 'Произвольная ссылка',
							type: 'text',
							admin: {
								condition: (_, siblingData) =>
									siblingData.linkType === 'custom',
							},
						},
						{
							name: 'pageSlug',
							label: 'Ссылка на страницу',
							type: 'relationship',
							relationTo: 'pages',
							admin: {
								condition: (_, siblingData) => siblingData.linkType === 'page',
							},
						},
					],
					required: false,
				},
			],
		},
	],
}
