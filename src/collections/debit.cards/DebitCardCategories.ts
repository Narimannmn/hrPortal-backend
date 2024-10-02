import { CollectionConfig } from 'payload/types'

const DebitCardCategories: CollectionConfig = {
	slug: 'debit-cards-categories',
	labels: {
		singular: 'Категория - дебетовая карта',
		plural: 'Категории - дебетовые карты',
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

export default DebitCardCategories
