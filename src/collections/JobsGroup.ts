import { CollectionConfig } from 'payload/types'
import { colorPickerField } from '@innovixx/payload-color-picker-field'

const JobGroups: CollectionConfig = {
	slug: 'jobGroups',
	labels: {
		singular: 'Job Group',
		plural: 'Job Groups',
	},
	access: {
		read: () => true,
	},
	admin: {
		group: 'Вакансии',
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
		{
			name: 'icon',
			label: 'Icon',
			type: 'relationship',
			relationTo: 'icons',
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

export default JobGroups
