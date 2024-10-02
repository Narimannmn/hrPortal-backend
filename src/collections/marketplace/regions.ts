import { CollectionConfig } from 'payload/types'

const MarketplaceCategories: CollectionConfig = {
	slug: 'marketplace_regions',
	labels: {
		singular: 'Регионы маркетплейса',
		plural: 'Регионы маркетплейса',
	},
	admin: {
		useAsTitle: 'labelRu',
		group: 'Имущество на продажу',
	},
	fields: [
		{
			name: 'regions',
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
