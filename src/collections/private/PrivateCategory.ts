import { CollectionConfig } from 'payload/types'

const PrivateCategory: CollectionConfig = {
	slug: 'PrivateCategory',
	labels: {
		singular: 'Категория',
		plural: 'Категория',
	},
	admin: {
		useAsTitle: 'labelRu',
		group: 'Private',
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'labelEn',
			label: 'Название (Английский)',
			type: 'text',
			required: true,
		},
		{
			name: 'labelRu',
			label: 'Название (Русский)',
			type: 'text',
			required: true,
		},
		{
			name: 'labelKz',
			label: 'Название (Казахский)',
			type: 'text',
			required: true,
		},
	],
}

export default PrivateCategory
