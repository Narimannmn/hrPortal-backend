import { CollectionConfig } from 'payload/types'

const Directors: CollectionConfig = {
	slug: 'directors',
	labels: {
		singular: 'Правление',
		plural: 'Правление',
	},
	access: {
		read: () => true,
	},
	admin: {
		group: 'О Банке',
	},
	fields: [
		{
			name: 'name',
			label: 'Имя',
			type: 'group',
			fields: [
				{
					name: 'labelKz',
					label: 'Имя (Kz)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelRu',
					label: 'Имя (Ru)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelEn',
					label: 'Имя (En)',
					type: 'text',
					required: true,
				},
			],
		},
		{
			name: 'image',
			label: 'Изображение',
			type: 'upload',
			required: true,
			relationTo: 'media',
		},
		{
			name: 'position',
			label: 'Должность',
			type: 'group',
			fields: [
				{
					name: 'labelKz',
					label: 'Должность (Kz)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelRu',
					label: 'Должность (Ru)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelEn',
					label: 'Должность (En)',
					type: 'text',
					required: true,
				},
			],
		},
		{
			name: 'description',
			label: 'Описание',
			type: 'group',
			fields: [
				{
					name: 'labelKz',
					label: 'Описание (Kz)',
					type: 'textarea',
					required: true,
				},
				{
					name: 'labelRu',
					label: 'Описание (Ru)',
					type: 'textarea',
					required: true,
				},
				{
					name: 'labelEn',
					label: 'Описание (En)',
					type: 'textarea',
					required: true,
				},
			],
		},
	],
}

export default Directors
