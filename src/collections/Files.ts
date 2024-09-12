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
		singular: 'Файл',
		plural: 'Файлы',
	},
	access: {
		read: () => true,
	},
	upload: {
		staticURL: '/files',
		staticDir: 'files',
	},
	admin: {
		group: 'Общий медиа контент контент',
		useAsTitle: 'alt',
	},
	fields: [
		{
			name: 'fileLabels',
			label: 'Название файла для отображения',
			type: 'group',
			fields: [
				{
					name: 'labelKz',
					label: 'Казахский',
					type: 'text',
				},
				{
					name: 'labelRu',
					label: 'Русский',
					type: 'text',
				},
				{
					name: 'labelEn',
					label: 'Английский',
					type: 'text',
				},
			],
		},
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
