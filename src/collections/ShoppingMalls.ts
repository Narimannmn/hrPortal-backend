import { CollectionConfig } from 'payload/types'

const ShoppingMalls: CollectionConfig = {
	slug: 'ShoppingMalls',
	labels: {
		singular: 'Торговый центр',
		plural: 'Торговые центры',
	},
	access: {
		read: () => true,
	},
	admin: {
		group: 'Партнеры',
	},
	fields: [
		{
			name: 'coords',
			label: 'Координаты',
			type: 'array',
			minRows: 1,
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
			],
		},
		{
			name: 'stores',
			label: 'Магазины',
			type: 'relationship',
			relationTo: 'stores',
			hasMany: true,
			required: true,
		},
		{
			name: 'mallName',
			label: 'Название торгового центра',
			type: 'group',
			fields: [
				{
					name: 'labelRu',
					label: 'Название (Рус)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelEn',
					label: 'Название (En)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelKz',
					label: 'Название (Қаз)',
					type: 'text',
					required: true,
				},
			],
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

export default ShoppingMalls
