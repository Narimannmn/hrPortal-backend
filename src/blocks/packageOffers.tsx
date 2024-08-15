import { Block } from 'payload/types'

export const packageOffers: Block = {
	slug: 'packageOffers',
	labels: {
		singular: 'Пакетное предложение',
		plural: 'Пакетные предложения',
	},
	fields: [
		{
			name: 'packages',
			label: 'Пакеты',
			type: 'array',
			fields: [
				{
					name: 'icon',
					label: 'Иконка',
					type: 'upload',
					relationTo: 'icons',
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
				{
					name: 'priceTooltip',
					label: 'Подсказка для цены?',
					type: 'group',
					fields: [
						{
							name: 'enabled',
							label: 'Включен',
							type: 'checkbox',
							required: true,
						},
						{
							name: 'richText',
							label: 'Подсказка цены',
							type: 'group',
							admin: {
								condition: (_, siblingData) => siblingData.enabled,
							},
							fields: [
								{
									name: 'labelRu',
									label: 'Текст подсказки цены (Рус)',
									type: 'richText',
								},
								{
									name: 'labelEn',
									label: 'Текст подсказки цены (En)',
									type: 'richText',
								},
								{
									name: 'labelKz',
									label: 'Текст подсказки цены (Қаз)',
									type: 'richText',
								},
							],
						},
					],
				},
				{
					name: 'features',
					label: 'Особенности',
					type: 'array',
					required: true,
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
								},
								{
									name: 'labelEn',
									label: 'Метка (En)',
									type: 'text',
									required: true,
								},
								{
									name: 'labelKz',
									label: 'Метка (Қаз)',
									type: 'text',
									required: true,
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
						{
							name: 'tooltip',
							label: 'Подсказка для метки?',
							type: 'group',
							fields: [
								{
									name: 'enabled',
									label: 'Включен',
									type: 'checkbox',
									required: true,
								},
								{
									name: 'richText',
									label: 'Подсказка метки',
									type: 'group',
									admin: {
										condition: (_, siblingData) => siblingData.enabled,
									},
									fields: [
										{
											name: 'labelRu',
											label: 'Текст подсказки метки (Рус)',
											type: 'richText',
										},
										{
											name: 'labelEn',
											label: 'Текст подсказки метки (En)',
											type: 'richText',
										},
										{
											name: 'labelKz',
											label: 'Текст подсказки метки (Қаз)',
											type: 'richText',
										},
									],
								},
							],
						},
					],
				},
			],
			required: true,
		},
	],
}
