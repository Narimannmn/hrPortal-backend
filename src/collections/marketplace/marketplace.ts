import { CollectionConfig } from 'payload/types'

const ForSaleItems: CollectionConfig = {
	slug: 'ForSale',
	labels: {
		singular: 'Имущество на продажу',
		plural: 'Имущество на продажу',
	},
	admin: {
		useAsTitle: 'titleRu',
		group: 'Имущество на продажу',
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'title',
			label: 'Заголовок',
			type: 'group',
			fields: [
				{
					name: 'titleKz',
					label: 'Заголовок на казахском',
					type: 'text',
					required: true,
				},
				{
					name: 'titleRu',
					label: 'Заголовок на русском',
					type: 'text',
					required: true,
				},
				{
					name: 'titleEn',
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
					name: 'descriptionKz',
					label: 'Описание на казахском',
					type: 'textarea',
					required: true,
				},
				{
					name: 'descriptionRu',
					label: 'Описание на русском',
					type: 'textarea',
					required: true,
				},
				{
					name: 'descriptionEn',
					label: 'Описание на английском',
					type: 'textarea',
					required: true,
				},
			],
		},
		{
			name: 'images',
			label: 'Изображения',
			type: 'array',
			fields: [
				{
					name: 'image',
					label: 'Изображение',
					type: 'upload',
					relationTo: 'media',
					required: true,
				},
			],
		},
		{
			name: 'regions',
			label: 'Регионы',
			type: 'relationship',
			relationTo: 'marketplace_regions',
			hasMany: true,
			required: true,
		},
		{
			name: 'category',
			label: 'Категория',
			type: 'relationship',
			relationTo: 'marketplace_categories',
			required: true,
		},
		{
			name: 'service_type',
			label: 'Тип услуги',
			type: 'relationship',
			relationTo: 'marketplace_services',
			hasMany: true,
			required: true,
		},
		{
			name: 'info',
			label: 'Подробная информация',
			type: 'array',
			fields: [
				{
					name: 'key',
					label: 'Название свойства',
					type: 'group',
					fields: [
						{
							name: 'keyKz',
							label: 'Название свойства на казахском',
							type: 'text',
							required: true,
						},
						{
							name: 'keyRu',
							label: 'Название свойства на русском',
							type: 'text',
							required: true,
						},
						{
							name: 'keyEn',
							label: 'Название свойства на английском',
							type: 'text',
							required: true,
						},
					],
				},
				{
					name: 'value',
					label: 'Описание свойства',
					type: 'group',
					fields: [
						{
							name: 'valueKz',
							label: 'Описание свойства на казахском',
							type: 'text',
							required: true,
						},
						{
							name: 'valueRu',
							label: 'Описание свойства на русском',
							type: 'text',
							required: true,
						},
						{
							name: 'valueEn',
							label: 'Описание свойства на английском',
							type: 'text',
							required: true,
						},
					],
				},
			],
		},
		{
			name: 'points',
			label: 'Координаты местоположения',
			type: 'group',
			fields: [
				{
					name: 'latitude',
					label: 'Широта',
					type: 'number',
					required: false,
				},
				{
					name: 'longitude',
					label: 'Долгота',
					type: 'number',
					required: false,
				},
			],
		},
		{
			name: 'contacts',
			label: 'Контактная информация',
			type: 'group',
			fields: [
				{
					name: 'phone',
					label: 'Номер телефона',
					type: 'text',
					required: true,
				},
			],
		},
		{
			name: 'price',
			label: 'Цена тг',
			type: 'number',
			required: true,
		},
	],
}

export default ForSaleItems
