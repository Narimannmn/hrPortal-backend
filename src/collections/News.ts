import { CollectionConfig } from 'payload/types'

export const News: CollectionConfig = {
	slug: 'news',
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true,
		},
		{
			name: 'content',
			type: 'richText',
			required: true,
		},
	],
	// hooks: {
	// 	afterOperation: [afterPostCreate],
	// },
	// upload: true,
}
