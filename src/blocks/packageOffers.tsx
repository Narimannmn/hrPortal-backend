import { Block } from 'payload/types'

export const packageOffers: Block = {
	slug: 'packageOffers',
	labels: {
		singular: 'Пакет предложений',
		plural: 'Пакеты предложений',
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
					label: 'Тултип цены',
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
							label: 'Тултип',
							type: 'group',
							admin: {
								condition: (_, siblingData) => siblingData.enabled,
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
					],
				},
				{
					name: 'features',
					label: 'Функции',
					type: 'array',
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
							label: 'Тултип',
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
									label: 'Тултип',
									type: 'group',
									admin: {
										condition: (_, siblingData) => siblingData.enabled,
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
							],
						},
					],
				},
			],
			required: true,
		},
	],
}
