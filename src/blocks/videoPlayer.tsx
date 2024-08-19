import { Block } from 'payload/types'

export const videoPlayer: Block = {
	slug: 'videoPlayer',
	labels: {
		singular: 'Видеоплеер',
		plural: 'Видеоплееры',
	},
	fields: [
		{
			name: 'video',
			label: 'Видео',
			type: 'upload',
			relationTo: 'media',
			required: true,
		},
		{
			name: 'image',
			label: 'Превью',
			type: 'upload',
			relationTo: 'media',
			required: true,
		},
	],
}
