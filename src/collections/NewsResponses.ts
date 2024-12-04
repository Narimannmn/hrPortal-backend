import { CollectionConfig } from 'payload/types'

const NewsResponses: CollectionConfig = {
	slug: 'news-responses',
	labels: {
		singular: 'News Response',
		plural: 'News Responses',
	},
	access: {
		create: () => true, // Allow all users to subscribe
		delete: ({ req: { user } }) => !!user, // Allow only authenticated users to delete
	},
	admin: {
		group: 'Новости',
	},
	fields: [
		{
			name: 'email',
			type: 'email',
			label: 'Email',
			required: true,
			unique: true,
		}
	],
}

export default NewsResponses
