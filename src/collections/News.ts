import { CollectionConfig } from 'payload/types'

const News: CollectionConfig = {
	slug: 'news',
	labels: {
		singular: 'News',
		plural: 'News',
	},
	fields: [
		{
			name: 'title',
			label: 'Title',
			type: 'text',
			required: true,
		},
		{
			name: 'date',
			label: 'Date',
			type: 'date',
			required: true,
		},
		{
			name: 'content',
			label: 'Content',
			type: 'richText',
		},
	],
}
