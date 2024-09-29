import { Block } from 'payload/types'

export const InnerPageBlock: Block = {
	slug: 'InnerPageBlock',
	labels: {
		singular: 'Список постов',
		plural: 'Пост',
	},
	fields: [
		{
			name: 'selectedPost',
			label: 'Выбрать раздел поста',
			type: 'relationship',
			relationTo: 'inner',
		},
	],
}
