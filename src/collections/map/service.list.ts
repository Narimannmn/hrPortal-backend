import { CollectionConfig } from 'payload/types'

const ServiceList: CollectionConfig = {
	slug: 'service-list',
	labels: {
		singular: 'Услуга',
		plural: 'Услуги',
	},
	admin: {
		useAsTitle: 'labelRu',
		group: 'Карта банкоматов, терминалов и отделений',
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

export default ServiceList
