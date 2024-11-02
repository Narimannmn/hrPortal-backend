import { CollectionConfig } from 'payload/types'

const MarketplaceCategories: CollectionConfig = {
	slug: 'marketplace_categories',
	labels: {
		singular: 'Категория маркетплейса',
		plural: 'Категория маркетплейса',
	},
	admin: {
		useAsTitle: 'labelRu',
		group: 'Имущество на продажу - Админ',
	},
	fields: [
		{
			name: 'category',
			label: 'Категория',
			type: 'group',
			fields: [
				{
					name: 'labelKz',
					label: 'Санат',
					type: 'text',
					required: true,
				},
				{
					name: 'labelRu',
					label: 'Категория',
					type: 'text',
					required: true,
				},
				{
					name: 'labelEn',
					label: 'Category',
					type: 'text',
					required: true,
				},
			],
		},
	],
}

export default MarketplaceCategories
