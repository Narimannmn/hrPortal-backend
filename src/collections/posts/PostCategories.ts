import { CollectionConfig } from 'payload/types'

const PostCategories: CollectionConfig = {
	slug: 'post-categories',
	labels: {
		singular: 'Категория новостей',
		plural: 'Категории новостей',
	},
	admin: {
		useAsTitle: 'labelRu',
		group: 'Новости',
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'labelEn',
			label: 'Название категории (Английский)',
			type: 'text',
			required: true,
		},
		{
			name: 'labelRu',
			label: 'Название категории (Русский)',
			type: 'text',
			required: true,
		},
		{
			name: 'labelKz',
			label: 'Название категории (Казахский)',
			type: 'text',
			required: true,
		},
	],
}

export default PostCategories
