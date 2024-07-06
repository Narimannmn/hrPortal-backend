import { CollectionConfig } from 'payload/types'

const Posts: CollectionConfig = {
	slug: 'posts',
	labels: {
		singular: 'Статья',
		plural: 'Статьи',
	},
	admin: {
		useAsTitle: 'titleEn',
		group: 'Статьи',
	},
	fields: [
		{
			name: 'titleEn',
			label: 'Название (Английский)',
			type: 'text',
			required: true,
		},
		{
			name: 'titleRu',
			label: 'Название (Русский)',
			type: 'text',
			required: true,
		},
		{
			name: 'titleKz',
			label: 'Название (Казахский)',
			type: 'text',
			required: true,
		},
		{
			name: 'date',
			label: 'Дата',
			type: 'date',
			required: true,
		},
		{
			name: 'image',
			label: 'Картинка',
			type: 'upload',
			relationTo: 'media',
			required: true,
		},
		{
			name: 'category',
			label: 'Категория',
			type: 'relationship',
			relationTo: 'post-categories',
			required: true,
		},
	],
}

export default Posts
