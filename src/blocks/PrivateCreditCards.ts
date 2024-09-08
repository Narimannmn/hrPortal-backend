import { Block } from 'payload/types'

export const PrivateCreditCards: Block = {
	slug: 'PrivateCreditCards',
	labels: {
		singular: 'Кредитные карты для Приватной страницы',
		plural: 'Кредитные карты для Приватной страницы',
	},
	fields: [
		{
			name: 'creditCards',
			label: 'Кредитная карты',
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
					name: 'buttonText',
					label: 'Текст кнопки',
					type: 'group',
					fields: [
						{
							name: 'labelKz',
							label: 'Текст кнопки (Казахский)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelRu',
							label: 'Текст кнопки (Русский)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Текст кнопки (Английский)',
							type: 'text',
							required: true,
						},
					],
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
						condition: (_, siblingData) => siblingData.linkType === 'custom',
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
		},
	],
}
