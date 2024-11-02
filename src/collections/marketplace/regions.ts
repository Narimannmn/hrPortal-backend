import { CollectionConfig } from 'payload/types'

const MarketplaceRegions: CollectionConfig = {
	slug: 'marketplace_regions',
	labels: {
		singular: 'Регионы маркетплейса',
		plural: 'Регионы маркетплейса',
	},
	admin: {
		useAsTitle: 'labelRu',
		group: 'Имущество на продажу - Админ',
	},
	fields: [
		{
			name: 'regions',
			label: 'Регионы',
			type: 'group',
			fields: [
				{
					name: 'labelKz',
					label: 'Регион на казахском',
					type: 'text',
					required: true,
				},
				{
					name: 'labelRu',
					label: 'Регион на русском',
					type: 'text',
					required: true,
				},
				{
					name: 'labelEn',
					label: 'Регион на английском',
					type: 'text',
					required: true,
				},
			],
		},
	],
}

export default MarketplaceRegions
