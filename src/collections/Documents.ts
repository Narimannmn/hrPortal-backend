import { CollectionConfig } from 'payload/types'

const Documents: CollectionConfig = {
	slug: 'documents',
	labels: {
		singular: 'Document',
		plural: 'Documents',
	},
	access: {
		read: () => true,
		create: () => true,
		update: () => true,
		delete: () => true,
	},
	upload: {
		staticURL: '/documents',
		staticDir: 'documents',
	},
	fields: [
		{
			name: 'filename',
			label: 'Filename',
			type: 'text',
			admin: {
				hidden: true,
			},
		},
	],
}

export default Documents
