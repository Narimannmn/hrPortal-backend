import { CollectionConfig } from 'payload/types'

const Departments: CollectionConfig = {
	slug: 'departments',
	labels: {
		singular: 'Department',
		plural: 'Departments',
	},
	access: {
		read: () => true,
	},
	admin: {
		group: 'Bank Structure',
	},
	fields: [
		{
			name: 'name',
			label: 'Department Name',
			type: 'text',
			required: true,
		},
		{
			name: 'parent',
			label: 'Parent Department',
			type: 'relationship',
			relationTo: 'departments',
			required: false,
		},
	],
}

export default Departments
