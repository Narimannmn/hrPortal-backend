import { CollectionConfig } from 'payload/types'

const Jobs: CollectionConfig = {
	slug: 'jobs',
	labels: {
		singular: 'Job',
		plural: 'Jobs',
	},
	access: {
		read: () => true,
	},
	admin: {
		group: 'Вакансии',
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
				{ label: 'Full-Time', value: 'Full-Time' },
				{ label: 'Part-Time', value: 'Part-Time' },
				{ label: 'Remote', value: 'Remote' },
				{ label: 'Flexible', value: 'Flexible' },
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
			name: 'jobGroup',
			label: 'Job Group',
			type: 'relationship',
			relationTo: 'jobGroups',
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
