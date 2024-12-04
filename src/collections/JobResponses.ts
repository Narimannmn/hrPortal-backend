import { CollectionConfig } from 'payload/types'

const JobResponses: CollectionConfig = {
	slug: 'job-responses',
	labels: {
		singular: 'Отклик на ваканию',
		plural: 'Отклики на ваканию',
	},
	access: {
		create: () => true,
		read: ({ req: { user } }) => !!user,
	},
	admin: {
		group: 'Вакансии',
	},
	fields: [
		{
			name: 'lastName',
			label: 'Last Name',
			type: 'text',
			required: true,
		},
		{
			name: 'firstName',
			label: 'First Name',
			type: 'text',
			required: true,
		},
		{
			name: 'phone',
			label: 'Phone',
			type: 'text',
			required: true,
		},
		{
			name: 'resume',
			label: 'Resume',
			type: 'relationship',
			relationTo: 'media',
			required: true,
		},
		{
			name: 'job',
			label: 'Job',
			type: 'relationship',
			relationTo: 'jobs',
			required: true,
		},
	],
}

export default JobResponses
