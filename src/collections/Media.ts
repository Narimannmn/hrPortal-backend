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
	},
	admin: {
		group: 'Общий медиа контент контент',
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
