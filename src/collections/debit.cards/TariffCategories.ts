import { CollectionConfig } from 'payload/types'

const TariffCategories: CollectionConfig = {
	slug: 'tariff-categories-debit-cards',
	labels: {
		singular: 'Тарифы - раздел дебетовая карта',
		plural: 'Тариф - раздел дебетовых карт',
	},
	admin: {
		useAsTitle: 'label.labelRu',
		group: 'Дебетовые карты',
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'label',
			label: 'Добавить раздел',
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

export default TariffCategories
