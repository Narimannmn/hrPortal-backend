import { CollectionConfig } from 'payload/types'

const Jobs: CollectionConfig = {
	slug: 'jobs',
	labels: {
		singular: 'Job',
		plural: 'Jobs',
	},
	access: {
		read: () => true, // or add custom access control if needed
	},
	admin: {
		group: 'Bank Structure', // Place it in an appropriate group
	},
	fields: [
		{
			name: 'jobTitle',
			label: 'Job Title',
			type: 'text',
			required: true,
		},
		{
			name: 'jobDescription',
			label: 'Job Description',
			type: 'text',
			required: true,
		},
		{
			name: 'workSchedule',
			label: 'Work Schedule',
			type: 'select',
			options: [
				{ label: 'Full-Time', value: 'full-time' },
				{ label: 'Part-Time', value: 'part-time' },
				{ label: 'Remote', value: 'remote' },
				{ label: 'Flexible', value: 'flexible' },
			],
			required: true,
		},
		{
			name: 'location',
			label: 'Location',
			type: 'text',
			required: true,
		},
		{
			name: 'department',
			label: 'Department',
			type: 'relationship',
			relationTo: 'departments', // Links to the departments collection
			required: true,
		},
		{
			name: 'content',
			label: 'Content',
			type: 'richText',
			required: true,
		},
		{
			name: 'priceRange',
			label: 'Price Range',
			type: 'group',
			fields: [
				{
					name: 'minPrice',
					label: 'Min Price',
					type: 'number',
					required: true,
				},
				{
					name: 'maxPrice',
					label: 'Max Price',
					type: 'number',
					required: true,
				},
			],
		},
	],
}

export default Jobs
