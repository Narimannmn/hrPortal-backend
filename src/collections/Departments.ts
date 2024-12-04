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
		group: 'Структура банка',
	},
	fields: [
		{
			name: 'name',
			label: 'Department Name',
			type: 'text',
			required: true,
		},
		{
			name: 'teams',
			label: 'Teams',
			type: 'array',
			fields: [
				{
					name: 'teamName',
					label: 'Team Name',
					type: 'text',
					required: true,
				},
				{
					name: 'description',
					label: 'Description',
					type: 'textarea',
					required: false,
				},
				{
					name: 'members',
					label: 'Team Members',
					type: 'array',
					fields: [
						{
							name: 'member',
							label: 'Member',
							type: 'relationship',
							relationTo: 'employees',
							required: true,
						},
					],
				},
			],
		},
	],
}

export default Departments
