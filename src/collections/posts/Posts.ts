import { CollectionConfig } from 'payload/types'

const Posts: CollectionConfig = {
	slug: 'posts',
	labels: {
		singular: 'Новость',
		plural: 'Новости',
	},
	admin: {
		useAsTitle: 'titleEn',
		group: 'Новости',
	},
	access: {
		read: () => true,
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
		{
			name: 'description',
			label: 'Описание',
			type: 'group',
			fields: [
				{
					name: 'labelKz',
					label: 'Описание (Казахский)',
					type: 'textarea',
					required: false,
				},
				{
					name: 'labelRu',
					label: 'Описание (Русский)',
					type: 'textarea',
					required: false,
				},
				{
					name: 'labelEn',
					label: 'Описание (Английский)',
					type: 'textarea',
					required: false,
				},
			],
		},
		{
			name: 'contentArray',
			label: 'Массив контента',
			type: 'array',
			minRows: 0,
			fields: [
				{
					name: 'title',
					label: 'Заголовок',
					type: 'group',
					fields: [
						{
							name: 'labelKz',
							label: 'Заголовок (Казахский)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelRu',
							label: 'Заголовок (Русский)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Заголовок (Английский)',
							type: 'text',
							required: true,
						},
					],
				},
				{
					name: 'richText',
					label: 'Текст',
					type: 'group',
					fields: [
						{
							name: 'labelKz',
							label: 'Текст (Казахский)',
							type: 'richText',
							required: true,
						},
						{
							name: 'labelRu',
							label: 'Текст (Русский)',
							type: 'richText',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Текст (Английский)',
							type: 'richText',
							required: true,
						},
					],
				},
				{
					name: 'hintText',
					label: 'Совет',
					type: 'group',
					fields: [
						{
							name: 'labelKz',
							label: 'Совет (Казахский)',
							type: 'text',
							required: false,
						},
						{
							name: 'labelRu',
							label: 'Совет (Русский)',
							type: 'text',
							required: false,
						},
						{
							name: 'labelEn',
							label: 'Совет (Английский)',
							type: 'text',
							required: false,
						},
					],
				},
			],
		},
	],
}

export default Posts
