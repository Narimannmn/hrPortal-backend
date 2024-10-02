import { CollectionConfig } from 'payload/types'

const MarketplaceCategories: CollectionConfig = {
	slug: 'marketplace_categories',
	labels: {
		singular: 'Категория маркетплейса',
		plural: 'Категория маркетплейса',
	},
	admin: {
		useAsTitle: 'labelRu',
		group: 'Имущество на продажу',
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
					required: false,
				},
				{
					name: 'labelRu',
					label: 'Категория',
					type: 'text',
					required: false,
				},
				{
					name: 'labelEn',
					label: 'Category',
					type: 'text',
					required: false,
				},
			],
		},
	],
}

export default MarketplaceCategories
