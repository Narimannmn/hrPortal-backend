import nodemailer from 'nodemailer'
import payload from 'payload'
import { CollectionConfig } from 'payload/types'

export const News: CollectionConfig = {
	slug: 'news',
	access: {
		read: () => true,
	},
	admin: {
		group: 'Новости',
		useAsTitle: 'title',
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true,
		},
		{
			name: 'content',
			type: 'richText',
			required: true,
		},
		{
			name: 'description',
			type: 'textarea',
			label: 'Description',
			required: true,
		},
		{
			name: 'preview',
			type: 'relationship',
			relationTo: 'media',
			label: 'Preview Image',
			admin: {
				position: 'sidebar',
			},
			required: true,
		},
		{
			name: 'newsGroups',
			type: 'relationship',
			relationTo: 'newsGroups',
			label: 'News Group',
			required: true,
		},
		{
			name: 'isArchive',
			type: 'checkbox',
			label: 'Is Archived',
			defaultValue: false,
			admin: {
				description: 'Check this box to mark the news as archived',
			},
		},
		{
			name: 'author',
			type: 'relationship',
			relationTo: 'users',
			hidden: true,
		},
	],
	hooks: {
		afterChange: [
			async ({ doc }) => {
				const newsTitle = doc.title
				const newsDescription = doc.description

				// Fetch all responses from NewsResponses collection
				const responses = await payload.find({
					collection: 'news-responses',
				})

				// Send emails to all responses
				responses.docs.forEach(async (response: any) => {
					const mailOptions = {
						from: 'admin@example.com',
						to: response.email,
						subject: `New News Article: ${newsTitle}`,
						text: `Hello, a new news article titled "${newsTitle}" has been published. Description: ${newsDescription}.`,
					}

					try {
						// Send email using payload.sendEmail or your configured SMTP server
						await payload.sendEmail(mailOptions)
					} catch (error) {
						console.error('Error sending email:', error)
					}
				})
			},
		],
	},
}
