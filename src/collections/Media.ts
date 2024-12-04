import { CollectionConfig } from 'payload/types'

const validateFileName = (value: string) => {
	if (value && /\s/.test(value)) {
		return 'Название файла не должно содержать пробелов.'
	}
	return true
}

const Media: CollectionConfig = {
	slug: 'media',
	labels: {
		singular: 'Картинка',
		plural: 'Картинки',
	},
	access: {
		read: () => true,
	},
	upload: {
		staticURL: '/media',
		staticDir: 'media',
		formatOptions: {
			format: 'webp',
			options: {
				quality: 70,
			},
		},
	},
	admin: {
		group: 'Общий медиа контент',
		useAsTitle: 'alt',
	},
	fields: [
		{
			name: 'alt',
			label: 'Альтернативный текст',
			type: 'text',
			required: true,
		},
		{
			name: 'filename',
			label: 'Название файла, без пробелов',
			type: 'text',
			validate: validateFileName,
			admin: {
				hidden: true,
			},
		},
	],
}

export default Media
