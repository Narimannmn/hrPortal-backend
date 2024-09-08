import { CollectionConfig } from 'payload/types'

const validateFileName = (value: string) => {
	if (value && /\s/.test(value)) {
		return 'Название файла не должно содержать пробелов.'
	}
	return true
}

const Files: CollectionConfig = {
	slug: 'files',
	labels: {
		singular: 'File',
		plural: 'Files',
	},
	access: {
		read: () => true,
	},
	upload: {
		staticURL: '/files',
		staticDir: 'files',
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

export default Files
