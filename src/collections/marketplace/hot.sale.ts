import { CollectionConfig } from 'payload/types'

const HotSale: CollectionConfig = {
	slug: 'hot_sale',
	labels: {
		singular: 'Горячая продажа',
		plural: 'Горячая продажа',
	},
	admin: {
		useAsTitle: 'labelRu',
		group: 'Имущество на продажу - Админ',
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'hotTxt',
			label: 'Текст - вызов',
			type: 'group',
			fields: [
				{
					name: 'labelKz',
					label: 'Текст - вызов на казахском',
					type: 'text',
					required: true,
				},
				{
					name: 'labelRu',
					label: 'Текст - вызов на русском',
					type: 'text',
					required: true,
				},
				{
					name: 'labelEn',
					label: 'Текст - вызов на английском',
					type: 'text',
					required: true,
				},
			],
		},
		{
			name: 'title',
			label: 'Заголовок',
			type: 'group',
			fields: [
				{
					name: 'labelKz',
					label: 'Заголовок на казахском',
					type: 'text',
					required: true,
				},
				{
					name: 'labelRu',
					label: 'Заголовок на русском',
					type: 'text',
					required: true,
				},
				{
					name: 'labelEn',
					label: 'Заголовок на английском',
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
					label: 'Описание на казахском',
					type: 'textarea',
					required: true,
				},
				{
					name: 'labelRu',
					label: 'Описание на русском',
					type: 'textarea',
					required: true,
				},
				{
					name: 'labelEn',
					label: 'Описание на английском',
					type: 'textarea',
					required: true,
				},
			],
		},
		{
			name: 'image',
			label: 'Изображение',
			type: 'upload',
			relationTo: 'marketplace-media',
			required: true,
		},
		{
			name: 'btnTxt',
			label: 'Текст кнопки',
			type: 'group',
			fields: [
				{
					name: 'labelKz',
					label: 'Текст кнопки на казахском',
					type: 'text',
					required: true,
				},
				{
					name: 'labelRu',
					label: 'Текст кнопки на русском',
					type: 'text',
					required: true,
				},
				{
					name: 'labelEn',
					label: 'Текст кнопки на английском',
					type: 'text',
					required: true,
				},
			],
		},
		{
			name: 'property',
			label: 'Свойство',
			type: 'group',
			fields: [
				{
					name: 'labelKz',
					label: 'Свойство на казахском',
					type: 'text',
					required: true,
				},
				{
					name: 'labelRu',
					label: 'Свойство на русском',
					type: 'text',
					required: true,
				},
				{
					name: 'labelEn',
					label: 'Свойство на английском',
					type: 'text',
					required: true,
				},
			],
		},
		{
			name: 'btnLink',
			label: 'Произвольная ссылка',
			type: 'text',
			required: true,
		},
		{
			name: 'right',
			label: 'отступ - Право',
			type: 'number',
			required: true,
		},
		{
			name: 'bottom',
			label: 'отступ - Низ',
			type: 'number',
			required: true,
		},
	],
}

export default HotSale
