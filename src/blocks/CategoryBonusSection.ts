import { Block } from 'payload/types'

export const CategoryBonusSection: Block = {
	slug: 'CategoryBonusSection',
	labels: {
		singular: 'Карты - Категория бонусов',
		plural: 'Карты - Категории бонусов',
	},
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
	],
}

export default CategoryBonusSection
