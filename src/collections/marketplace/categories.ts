import { CollectionConfig } from 'payload/types'

const Categories: CollectionConfig = {
	slug: 'categories',
	labels: {
		singular: 'Категория',
		plural: 'Категории',
	},
	admin: {
		useAsTitle: 'labelRu',
		group: 'Имущество на продажу',
	},
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
}

export default Categories
