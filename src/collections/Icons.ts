import { CollectionConfig } from 'payload/types'

const Icons: CollectionConfig = {
	slug: 'icons',
	labels: {
		singular: 'Icon',
		plural: 'Icons',
	},
	access: {
		read: () => true,
	},
	admin: {
		group: 'Общий медиа контент',
	},
	upload: {
		staticURL: '/icons',
		staticDir: 'icons',
		mimeTypes: ['image/svg+xml'],
	},
	fields: [], // Assuming you are just uploading icons here without extra fields
}

export default Icons
