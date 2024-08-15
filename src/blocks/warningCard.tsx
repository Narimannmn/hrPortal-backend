import { Block } from 'payload/types'

export const warningCard: Block = {
	slug: 'warningCard',
	labels: {
		singular: 'Карточка с предупреждением',
		plural: 'Карточки с предупреждениями',
	},
	fields: [
		{
			name: 'title',
			type: 'group',
			fields: [
				{
					name: 'labelRu',
					type: 'text',
					label: 'Заголовок (на русском)',
					required: true,
				},
				{
					name: 'labelEn',
					type: 'text',
					label: 'Заголовок (на английском)',
					required: true,
				},
				{
					name: 'labelKz',
					type: 'text',
					label: 'Заголовок (на казахском)',
					required: true,
				},
			],
		},
		{
			name: 'description',
			type: 'group',
			fields: [
				{
					name: 'labelRu',
					type: 'text',
					label: 'Описание (Ru)',
					required: true,
				},
				{
					name: 'labelEn',
					type: 'text',
					label: 'Описание (En)',
					required: true,
				},
				{
					name: 'labelKz',
					type: 'text',
					label: 'Описание (Kz)',
					required: true,
				},
			],
		},
		{
			name: 'warningText',
			type: 'group',
			fields: [
				{
					name: 'labelRu',
					type: 'text',
					label: 'Текст предупреждения (Ru)',
					required: true,
				},
				{
					name: 'labelEn',
					type: 'text',
					label: 'Текст предупреждения (En)',
					required: true,
				},
				{
					name: 'labelKz',
					type: 'text',
					label: 'Текст предупреждения (Kz)',
					required: true,
				},
			],
		},
		{
			name: 'image',
			type: 'upload',
			label: 'Изображение',
			relationTo: 'media',
			required: true,
		},
		{
			name: 'icon',
			label: 'Иконка',
			type: 'upload',
			relationTo: 'icons',
			required: true,
		},
	],
}
