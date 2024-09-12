import { CollectionConfig } from 'payload/types'

const History: CollectionConfig = {
	slug: 'history',
	labels: {
		singular: 'История',
		plural: 'История',
	},
	access: {
		read: () => true,
	},
	admin: {
		group: 'О Банке',
	},
	fields: [
		{
			name: 'title',
			label: 'Заголовок',
			type: 'group',
			fields: [
				{
					name: 'labelRu',
					label: 'Заголовок (Рус)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelEn',
					label: 'Заголовок (En)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelKz',
					label: 'Заголовок (Қаз)',
					type: 'text',
					required: true,
				},
			],
		},
		{
			name: 'date',
			label: 'Дата',
			type: 'date',
			required: true,
		},
		{
			name: 'image',
			label: 'Изображение',
			type: 'upload',
			relationTo: 'media',
			required: false,
		},
		{
			name: 'description',
			label: 'Описание',
			type: 'group',
			fields: [
				{
					name: 'labelRu',
					label: 'Значение (Рус)',
					type: 'richText',
					required: true,
				},
				{
					name: 'labelEn',
					label: 'Значение (En)',
					type: 'richText',
					required: true,
				},
				{
					name: 'labelKz',
					label: 'Значение (Қаз)',
					type: 'richText',
					required: true,
				},
			],
		},
	],
}

export default History
