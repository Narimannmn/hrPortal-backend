import { CollectionConfig } from 'payload/types'

const Icons: CollectionConfig = {
	slug: 'icons',
	labels: {
		singular: 'Иконка',
		plural: 'Иконки',
	},
	access: {
		read: () => true,
	},
	admin: {
		group: 'Общий медиа контент контент',
	},
	upload: {
		staticURL: '/icons',
		staticDir: 'icons',
		mimeTypes: ['image/svg+xml'],
	},
	fields: [],
}

export default Icons
