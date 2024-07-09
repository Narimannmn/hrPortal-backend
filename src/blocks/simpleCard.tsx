import { Block } from 'payload/types'

export const simpleCard: Block = {
	slug: 'simpleCard',
	labels: {
		singular: 'Категория продуктов (простые карточки)',
		plural: 'Категории продуктов (простые карточки)',
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
			name: 'categories',
			label: 'Категории',
			type: 'array',
			fields: [
				{
					name: 'title',
					label: 'Название категории',
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Название категории (Рус)',
							type: 'text',
							required: false,
						},
						{
							name: 'labelEn',
							label: 'Название категории (En)',
							type: 'text',
							required: false,
						},
						{
							name: 'labelKz',
							label: 'Название категории (Қаз)',
							type: 'text',
							required: false,
						},
					],
				},
				{
					name: 'products',
					label: 'Продукты',
					type: 'array',
					fields: [
						{
							name: 'name',
							label: 'Название продукта',
							type: 'group',
							fields: [
								{
									name: 'labelRu',
									label: 'Название продукта (Рус)',
									type: 'text',
									required: true,
								},
								{
									name: 'labelEn',
									label: 'Название продукта (En)',
									type: 'text',
									required: true,
								},
								{
									name: 'labelKz',
									label: 'Название продукта (Қаз)',
									type: 'text',
									required: true,
								},
							],
						},
						{
							name: 'icon',
							label: 'Иконка',
							type: 'upload',
							relationTo: 'icons',
							required: true,
						},
					],
				},
			],
		},
	],
}
