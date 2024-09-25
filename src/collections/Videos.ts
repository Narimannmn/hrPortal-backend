import { CollectionConfig } from 'payload/types'

const Videos: CollectionConfig = {
	slug: 'videos',
	labels: {
		singular: 'Видео',
		plural: 'Видео',
	},
	access: {
		read: () => true,
	},
	admin: {
		group: 'Общий медиа контент',
	},
	upload: {
		staticURL: '/videos',
		staticDir: 'videos',
		mimeTypes: ['video/mp4', 'video/webm', 'video/ogg'],
	},
	fields: [],
}

export default Videos
