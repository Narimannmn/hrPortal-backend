import { Block } from 'payload/types'

export const CreditBlock: Block = {
	slug: 'CreditBlock',
	labels: {
		singular: 'Кредит подробнее',
		plural: 'Кредит подробнее',
	},
	fields: [
		{
			name: 'title',
			type: 'group',
			label: 'Заголовок',
			fields: [
				{ name: 'labelKz', type: 'text', label: 'Заголовок на каз' },
				{ name: 'labelRu', type: 'text', label: 'Заголовок на рус' },
				{ name: 'labelEn', type: 'text', label: 'Заголовок на англ' },
			],
		},
		{
			name: 'subtitle',
			type: 'group',
			label: 'Подзаголовок',
			fields: [
				{ name: 'labelKz', type: 'text', label: 'Подзаголовок на каз' },
				{ name: 'labelRu', type: 'text', label: 'Подзаголовок на рус' },
				{ name: 'labelEn', type: 'text', label: 'Подзаголовок на англ' },
			],
		},
		{
			name: 'advantages',
			type: 'array',
			label: 'Преимущества',
			fields: [
				{
					name: 'card',
					type: 'group',
					label: 'Карточка',
					fields: [
						{
							name: 'title',
							type: 'group',
							label: 'Заголовок',
							fields: [
								{ name: 'labelKz', type: 'text', label: 'Заголовок на каз' },
								{ name: 'labelRu', type: 'text', label: 'Заголовок на рус' },
								{ name: 'labelEn', type: 'text', label: 'Заголовок на англ' },
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
		},
		{
			name: 'privileges',
			type: 'array',
			label: 'Привилегии',
			fields: [
				{
					name: 'card',
					type: 'group',
					label: 'Карточка',
					fields: [
						{
							name: 'title',
							type: 'group',
							label: 'Заголовок',
							fields: [
								{ name: 'labelKz', type: 'text', label: 'Заголовок на каз' },
								{ name: 'labelRu', type: 'text', label: 'Заголовок на рус' },
								{ name: 'labelEn', type: 'text', label: 'Заголовок на англ' },
							],
						},
						{
							name: 'subtitle',
							type: 'group',
							label: 'Подзаголовок',
							fields: [
								{ name: 'labelKz', type: 'text', label: 'Подзаголовок на каз' },
								{ name: 'labelRu', type: 'text', label: 'Подзаголовок на рус' },
								{
									name: 'labelEn',
									type: 'text',
									label: 'Подзаголовок на англ',
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
		},
		{
			name: 'steps',
			type: 'array',
			label: 'Получение - этапы',
			fields: [
				{
					name: 'title',
					type: 'group',
					label: 'Заголовок',
					fields: [
						{ name: 'labelKz', type: 'text', label: 'Заголовок на каз' },
						{ name: 'labelRu', type: 'text', label: 'Заголовок на рус' },
						{ name: 'labelEn', type: 'text', label: 'Заголовок на англ' },
					],
				},
				{
					name: 'subtitle',
					type: 'group',
					label: 'Подзаголовок',
					fields: [
						{ name: 'labelKz', type: 'text', label: 'Подзаголовок на каз' },
						{ name: 'labelRu', type: 'text', label: 'Подзаголовок на рус' },
						{
							name: 'labelEn',
							type: 'text',
							label: 'Подзаголовок на англ',
						},
					],
				},
			],
		},
		{
			name: 'titleTab',
			type: 'group',
			label: 'Заголовок',
			fields: [
				{ name: 'labelKz', type: 'text', label: 'Заголовок на каз' },
				{ name: 'labelRu', type: 'text', label: 'Заголовок на рус' },
				{ name: 'labelEn', type: 'text', label: 'Заголовок на англ' },
			],
		},
		{
			name: 'subtitleTab',
			type: 'group',
			label: 'Подзаголовок',
			fields: [
				{ name: 'labelKz', type: 'text', label: 'Подзаголовок на каз' },
				{ name: 'labelRu', type: 'text', label: 'Подзаголовок на рус' },
				{ name: 'labelEn', type: 'text', label: 'Подзаголовок на англ' },
			],
		},
		{
			name: 'tabs',
			type: 'array',
			label: 'Вкладки',
			fields: [
				{
					name: 'tab',
					type: 'group',
					label: 'Вкладка',
					fields: [
						{
							name: 'title',
							type: 'group',
							label: 'Заголовок вкладки',
							fields: [
								{ name: 'labelKz', type: 'text', label: 'Заголовок на каз' },
								{ name: 'labelRu', type: 'text', label: 'Заголовок на рус' },
								{ name: 'labelEn', type: 'text', label: 'Заголовок на англ' },
							],
						},
						{
							name: 'details',
							type: 'array',
							label: 'Детали для вкладки',
							fields: [
								{
									name: 'detail',
									type: 'group',
									label: 'Деталь',
									fields: [
										{
											name: 'title',
											type: 'group',
											label: 'Заголовок детали',
											fields: [
												{
													name: 'labelKz',
													type: 'text',
													label: 'Заголовок на каз',
												},
												{
													name: 'labelRu',
													type: 'text',
													label: 'Заголовок на рус',
												},
												{
													name: 'labelEn',
													type: 'text',
													label: 'Заголовок на англ',
												},
											],
										},
										{
											name: 'items',
											type: 'array',
											label: 'Пункты для детали',
											fields: [
												{
													name: 'item',
													type: 'group',
													label: 'Пункт',
													fields: [
														{
															name: 'text',
															type: 'group',
															label: 'Текст пункта',
															fields: [
																{
																	name: 'labelKz',
																	type: 'text',
																	label: 'Текст на каз',
																},
																{
																	name: 'labelRu',
																	type: 'text',
																	label: 'Текст на рус',
																},
																{
																	name: 'labelEn',
																	type: 'text',
																	label: 'Текст на англ',
																},
															],
														},
													],
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			name: 'details',
			type: 'array',
			label: 'Детали кредита',
			fields: [
				{
					name: 'detail',
					type: 'group',
					label: 'Деталь',
					fields: [
						{
							name: 'title',
							type: 'group',
							label: 'Заголовок',
							fields: [
								{ name: 'labelKz', type: 'text', label: 'Заголовок на каз' },
								{ name: 'labelRu', type: 'text', label: 'Заголовок на рус' },
								{ name: 'labelEn', type: 'text', label: 'Заголовок на англ' },
							],
						},
						{
							name: 'items',
							type: 'array',
							label: 'Пункты',
							fields: [
								{
									name: 'item',
									type: 'group',
									label: 'Пункт',
									fields: [
										{
											name: 'text',
											type: 'group',
											label: 'Текст',
											fields: [
												{
													name: 'labelKz',
													type: 'text',
													label: 'Текст на каз',
												},
												{
													name: 'labelRu',
													type: 'text',
													label: 'Текст на рус',
												},
												{
													name: 'labelEn',
													type: 'text',
													label: 'Текст на англ',
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
	],
}
