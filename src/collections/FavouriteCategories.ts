import { CollectionConfig } from 'payload/types'

const FavouriteCategories: CollectionConfig = {
	slug: 'FavouriteCategories',
	labels: {
		singular: 'Категория по личным интересам',
		plural: 'Категории по личным интересам',
	},
	access: {
		read: () => true,
	},
	admin: {
		group: 'Партнеры',
		useAsTitle: 'labels.labelRu',
	},
	fields: [
		{
			name: 'labels',
			label: 'Название категории',
			type: 'group',
			fields: [
				{
					name: 'labelKz',
					label: 'Название (KZ)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelRu',
					label: 'Название (RU)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelEn',
					label: 'Название (EN)',
					type: 'text',
					required: true,
				},
			],
		},
	],
}

export default FavouriteCategories
