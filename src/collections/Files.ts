import { CollectionConfig } from 'payload/types'

const validateFileName = (value: string) => {
	if (value && /\s/.test(value)) {
		return 'Filename should not contain spaces.'
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
		read: () => true, // Public access to read files
	},
	upload: {
		staticURL: '/files', // URL to access the file
		staticDir: 'files', // Directory where files will be stored on the server
		mimeTypes: [
			'application/pdf',
			'image/jpeg',
			'image/png',
			'application/msword',
			'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
		], // Allowing various file types
	},
	admin: {
		group: 'Media Content',
		useAsTitle: 'fileLabels', // Use 'fileLabels' field as the title in the admin panel
	},
	fields: [
		{
			name: 'fileLabels',
			label: 'File Label for Display',
			type: 'text',
			required: true,
		},
		{
			name: 'alt',
			label: 'Alt Text',
			type: 'text',
			required: true,
		},
		{
			name: 'filename',
			label: 'Filename',
			type: 'text',
			validate: validateFileName,
			admin: {
				hidden: true, // Hidden from admin UI
			},
		},
		{
			name: 'file',
			label: 'File',
			type: 'upload', // The actual file to be uploaded
			relationTo: 'files', // Reference to the 'files' collection
			required: true, // Ensure file is uploaded
		},
	],
}

export default Files
