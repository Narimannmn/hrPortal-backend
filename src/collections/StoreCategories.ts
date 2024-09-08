import { CollectionConfig } from 'payload/types'

const StoresCategories: CollectionConfig = {
	slug: 'stores-categories',
	labels: {
		singular: 'Категория',
		plural: 'Категории',
	},
	access: {
		read: () => true,
	},
	admin: {
		group: 'Дебетные карты',
	},
	fields: [
		{
			name: 'labelKz',
			label: 'Название (KZ)',
			type: 'text',
			required: true,
		},
	],
}

export default StoresCategories
