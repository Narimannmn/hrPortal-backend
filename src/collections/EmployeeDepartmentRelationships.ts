import { CollectionConfig } from 'payload/types'

const EmployeeDepartmentRelationships: CollectionConfig = {
	slug: 'employee-department-relationships',
	labels: {
		singular: 'Employee-Department Relationship',
		plural: 'Employee-Department Relationships',
	},
	access: {
		read: () => true,
	},
	admin: {
		group: 'Bank Structure',
	},
	fields: [
		{
			name: 'employee',
			label: 'Employee',
			type: 'relationship',
			relationTo: 'employees',
			required: true,
		},
		{
			name: 'department',
			label: 'Department',
			type: 'relationship',
			relationTo: 'departments',
			required: true,
		},
	],
}

export default EmployeeDepartmentRelationships
