import { CollectionConfig } from 'payload/types'

const Stores: CollectionConfig = {
	slug: 'stores',
	labels: {
		singular: 'Магазин',
		plural: 'Магазины',
	},
	access: {
		read: () => true,
	},
	admin: {
		group: 'Магазин',
	},
	fields: [
		{
			name: 'latitude',
			label: 'Широта магазина',
			type: 'number',
			required: true,
		},
		{
			name: 'longitude',
			label: 'Долгота магазина',
			type: 'number',
			required: true,
		},
		{
			name: 'address',
			label: 'Адрес',
			type: 'group',
			fields: [
				{
					name: 'labelRu',
					label: 'Адрес (Рус)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelEn',
					label: 'Адрес (En)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelKz',
					label: 'Адрес (Қаз)',
					type: 'text',
					required: true,
				},
				{
					name: 'workingHours',
					label: 'Время работы',
					type: 'text',
					required: true,
				},
				{
					name: 'phoneNumber',
					label: 'Номер телефона',
					type: 'text',
					required: false,
				},
			],
		},
		{
			name: 'storesCategories',
			label: 'Категории',
			type: 'relationship',
			relationTo: 'StoresCategories',
			hasMany: true,
			required: true,
		},
		{
			name: 'favouriteCategories',
			label: 'Категории по личным интересам',
			type: 'relationship',
			relationTo: 'FavouriteCategories',
			hasMany: true,
			required: true,
		},
		{
			name: 'storeName',
			label: 'Название магазина',
			type: 'text',
			required: true,
		},
		{
			name: 'logo',
			label: 'Логотип',
			type: 'upload',
			relationTo: 'media',
			required: true,
		},
	],
}

export default Stores
