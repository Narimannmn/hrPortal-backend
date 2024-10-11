import { CollectionConfig } from 'payload/types'

const StoresCategories: CollectionConfig = {
	slug: 'StoresCategories',
	labels: {
		singular: 'Категория',
		plural: 'Категории',
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

export default StoresCategories
