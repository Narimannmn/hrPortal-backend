import { CollectionConfig } from 'payload/types'

const Home: CollectionConfig = {
	slug: 'home',
	access: {
		read: () => true,
	},
	admin: {
		group: 'Homepage',
		useAsTitle: 'team',
	},
	fields: [
		{
			name: 'team',
			type: 'relationship',
			relationTo: 'employees',
			hasMany: true,
			label: 'Team',
			required: true,
			minRows: 6,
			maxRows: 6,
		},
		{
			name: 'jobgroups',
			type: 'relationship',
			relationTo: 'jobGroups',
			hasMany: true,
			label: 'Job Groups',
			required: true,
			minRows: 6,
			maxRows: 6,
		},
	],
}

export default Home
