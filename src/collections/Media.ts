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
		singular: 'Media',
		plural: 'Media',
	},
	access: {
		read: () => true,
	},
	upload: {
		staticURL: '/media',
		staticDir: 'media',
	},
	fields: [
		{
			name: 'alt',
			label: 'Alt',
			type: 'text',
			required: true,
		},
		{
			name: 'filename',
			label: 'Filename',
			type: 'text',
			validate: validateFileName,
			admin: {
				hidden: true,
			},
		},
	],
}

export default Media
