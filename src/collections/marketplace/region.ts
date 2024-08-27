import { CollectionConfig } from 'payload/types'

const Regions: CollectionConfig = {
	slug: 'regions',
	labels: {
		singular: 'Регион',
		plural: 'Регионы',
	},
	admin: {
		useAsTitle: 'labelRu',
		group: 'Имущество на продажу',
	},
	fields: [
		{
			name: 'labelKz',
			label: 'Аймақ',
			type: 'text',
			required: true,
		},
		{
			name: 'labelRu',
			label: 'Регион',
			type: 'text',
			required: true,
		},
		{
			name: 'labelEn',
			label: 'Region',
			type: 'text',
			required: true,
		},
	],
}

export default Regions
