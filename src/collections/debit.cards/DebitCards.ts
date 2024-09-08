import { CollectionConfig } from 'payload/types'

const DebitCardCategories: CollectionConfig = {
	slug: 'debit-card-categories',
	labels: {
		singular: 'Debit Card Category',
		plural: 'Debit Card Categories',
	},
	admin: {
		useAsTitle: 'label.labelRu',
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'label',
			label: 'Название категории',
			type: 'group',
			fields: [
				{
					name: 'labelRu',
					label: 'Название (Рус)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelEn',
					label: 'Название (En)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelKz',
					label: 'Название (Қаз)',
					type: 'text',
					required: true,
				},
			],
		},
	],
}

export default DebitCardCategories
