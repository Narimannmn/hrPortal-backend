import { CollectionConfig } from 'payload/types'

const TariffSubCat: CollectionConfig = {
	slug: 'tariff-categories-sub-cat',
	labels: {
		singular: 'Тарифы - подраздел дебетовая карта',
		plural: 'Тариф - подраздел дебетовых карт',
	},
	admin: {
		useAsTitle: 'labelRu',
		group: 'Дебетовые карты',
	},
	access: {
		read: () => true,
	},
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
		{
			name: 'hintRu',
			label: 'Подсказка (Рус)',
			type: 'textarea',
		},
		{
			name: 'hintEn',
			label: 'Подсказка (En)',
			type: 'textarea',
		},
		{
			name: 'hintKz',
			label: 'Подсказка (Қаз)',
			type: 'textarea',
		},
	],
}

export default TariffSubCat
