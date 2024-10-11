import { CollectionConfig } from 'payload/types'

const CreditCardCategories: CollectionConfig = {
	slug: 'credit-cards-categories',
	labels: {
		singular: 'Категория - кредитные карта',
		plural: 'Категории - кредитные карты',
	},
	admin: {
		useAsTitle: 'label.labelRu',
		group: 'Кредитные карты',
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'label',
			label: 'Добавить категорию',
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

export default CreditCardCategories
