import { CollectionConfig } from 'payload/types'

const PostCategories: CollectionConfig = {
	slug: 'post-categories',
	labels: {
		singular: 'Категория статьи',
		plural: 'Категории статей',
	},

	admin: {
		useAsTitle: 'labelRu',
		group: 'Статьи',
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'labelEn',
			label: 'Label (English)',
			type: 'text',
			required: true,
		},
		{
			name: 'labelRu',
			label: 'Label (Russian)',
			type: 'text',
			required: true,
		},
		{
			name: 'labelKz',
			label: 'Label (Kazakh)',
			type: 'text',
			required: true,
		},
	],
}

export default PostCategories
