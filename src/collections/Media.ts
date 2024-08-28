import { S3UploadCollectionConfig } from 'payload-s3-upload'

const validateFileName = (value: string) => {
	if (value && /\s/.test(value)) {
		return 'Название файла не должно содержать пробелов.'
	}
	return true
}

const Media: S3UploadCollectionConfig = {
	slug: 'media',
	labels: {
		singular: 'Media',
		plural: 'Media',
	},
	access: {
		read: () => true,
	},
	upload: {
		staticURL: process.env.S3_ENDPOINT,
		s3: {
			bucket: 'my-bucket',
			prefix: 'images/xyz',
			commandInput: {
				ACL: 'public-read',
			},
		},
		adminThumbnail: ({ doc }) =>
			`${process.env.S3_ENDPOINT}/images/xyz/${doc.filename}`,
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
	hooks: {
		afterRead: [
			({ doc }) =>
				`${process.env.S3_ENDPOINT}/images/${doc.type}/${doc.filename}`,
		],
	},
}

export default Media
