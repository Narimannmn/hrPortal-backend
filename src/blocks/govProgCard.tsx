import { Block } from 'payload/types'

export const govProgCard: Block = {
	slug: 'govProgCard',
	labels: {
		singular: 'Карточка государственных программ',
		plural: 'Карточки государственных программ',
	},
	fields: [
		{
			name: 'tabs',
			label: 'Вкладки',
			type: 'array',
			minRows: 1,
			fields: [
				{
					name: 'tabLabel',
					label: 'Название вкладки',
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Название вкладки (Рус)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Название вкладки (En)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelKz',
							label: 'Название вкладки (Қаз)',
							type: 'text',
							required: true,
						},
					],
				},
				{
					name: 'programs',
					label: 'Программы',
					type: 'array',
					minRows: 1,
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
							label: 'Заголовок программы',
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
							name: 'subtitle',
							label: 'Подзаголовок программы',
							type: 'group',
							fields: [
								{
									name: 'labelRu',
									label: 'Подзаголовок (Рус)',
									type: 'text',
									required: false,
								},
								{
									name: 'labelEn',
									label: 'Подзаголовок (En)',
									type: 'text',
									required: false,
								},
								{
									name: 'labelKz',
									label: 'Подзаголовок (Қаз)',
									type: 'text',
									required: false,
								},
							],
						},
						{
							name: 'features',
							label: 'Особенности программы',
							type: 'array',
							fields: [
								{
									name: 'feature',
									label: 'Особенность',
									type: 'group',
									fields: [
										{
											name: 'labelRu',
											label: 'Особенность (Рус)',
											type: 'richText',
											required: true,
										},
										{
											name: 'labelEn',
											label: 'Особенность (En)',
											type: 'richText',
											required: true,
										},
										{
											name: 'labelKz',
											label: 'Особенность (Қаз)',
											type: 'richText',
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
									label: 'Надпись на кнопке',
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
									label: 'Вариант кнопки',
									type: 'select',
									options: [
										{
											label: 'Розовый фон с белой надписью',
											value: 'primary',
										},
										{
											label: 'Белый фон с черной надписью',
											value: 'secondary',
										},
										{
											label: 'Прозрачный фон с розовой надписью',
											value: 'tertiary',
										},
										{
											label: 'Прозрачный фон с серой надписью',
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
										condition: (_, siblingData) =>
											siblingData.linkType === 'page',
									},
								},
							],
							required: false,
						},
					],
					required: true,
				},
			],
		},
	],
}
