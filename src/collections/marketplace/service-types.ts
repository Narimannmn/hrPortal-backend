import { CollectionConfig } from 'payload/types'

const ServiceTypes: CollectionConfig = {
	slug: 'service-types',
	labels: {
		singular: 'Тип услуги',
		plural: 'Типы услуг',
	},
	admin: {
		useAsTitle: 'labelRu',
		group: 'Имущество на продажу',
	},
	fields: [
		{
			name: 'labelKz',
			label: 'Қызмет түрі',
			type: 'text',
			required: true,
		},
		{
			name: 'labelRu',
			label: 'Тип услуги',
			type: 'text',
			required: true,
		},
		{
			name: 'labelEn',
			label: 'Service Type',
			type: 'text',
			required: true,
		},
	],
}

export default ServiceTypes
