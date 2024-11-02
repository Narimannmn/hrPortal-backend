import { CollectionConfig } from 'payload/types'

const MarketplaceServices: CollectionConfig = {
	slug: 'marketplace_services',
	labels: {
		singular: 'Тип услуги маркетплейса',
		plural: 'Тип услуги Категория маркетплейса',
	},
	admin: {
		useAsTitle: 'labelRu',
		group: 'Имущество на продажу - Админ',
	},
	fields: [
		{
			name: 'category',
			label: 'Тип услуги',
			type: 'group',
			fields: [
				{
					name: 'labelKz',
					label: 'Тип услуги на казахском',
					type: 'text',
					required: true,
				},
				{
					name: 'labelRu',
					label: 'Тип услуги на русском',
					type: 'text',
					required: true,
				},
				{
					name: 'labelEn',
					label: 'Type of service',
					type: 'text',
					required: true,
				},
			],
		},
	],
}

export default MarketplaceServices
