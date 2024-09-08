import { CollectionConfig } from 'payload/types'

const Filters: CollectionConfig = {
	slug: 'filters',
	labels: {
		singular: 'Фильтр',
		plural: 'Фильтры',
	},
	admin: {
		useAsTitle: 'labelRu',
		group: 'Имущество на продажу',
	},
	fields: [
		{
			name: 'categors',
			label: 'Категория',
			type: 'group',
			fields: [
				{
					name: 'labelKz',
					label: 'Санат',
					type: 'text',
					required: false,
				},
				{
					name: 'labelRu',
					label: 'Категория',
					type: 'text',
					required: false,
				},
				{
					name: 'labelEn',
					label: 'Category',
					type: 'text',
					required: false,
				},
			],
		},
		{
			name: 'region',
			label: 'Регион',
			type: 'group',
			fields: [
				{
					name: 'labelKz',
					label: 'Аймақ',
					type: 'text',
					required: false,
				},
				{
					name: 'labelRu',
					label: 'Регион',
					type: 'text',
					required: false,
				},
				{
					name: 'labelEn',
					label: 'Region',
					type: 'text',
					required: false,
				},
			],
		},
		{
			name: 'serviceType',
			label: 'Тип услуги',
			type: 'group',
			fields: [
				{
					name: 'labelKz',
					label: 'Қызмет түрі',
					type: 'text',
					required: false,
				},
				{
					name: 'labelRu',
					label: 'Тип услуги',
					type: 'text',
					required: false,
				},
				{
					name: 'labelEn',
					label: 'Service Type',
					type: 'text',
					required: false,
				},
			],
		},
	],
}

export default Filters
