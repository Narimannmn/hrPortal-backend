import { CollectionConfig } from 'payload/types'
import { colorPickerField } from '@innovixx/payload-color-picker-field'

const NewsGroups: CollectionConfig = {
	slug: 'newsGroups',
	labels: {
		singular: 'News Group',
		plural: 'News Groups',
	},
	access: {
		read: () => true,
	},
	admin: {
		group: 'Новости',
	},
	fields: [
		{
			name: 'name',
			label: 'Name',
			type: 'text',
			required: true,
		},
		{
			name: 'description',
			label: 'Description',
			type: 'textarea',
			required: true,
		},
		colorPickerField({
			name: 'groupTagColor',
			label: 'Group Tag Color',
			required: false,
			admin: {
				position: 'sidebar',
				description: 'Select a color for the group tag',
			},
		}),
	],
}

export default NewsGroups
