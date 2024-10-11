import { CollectionConfig } from 'payload/types'

const Promotions: CollectionConfig = {
	slug: 'promotions',
	labels: {
		singular: 'Акция партнера',
		plural: 'Акции партнеров',
	},
	access: {
		read: () => true,
	},
	admin: {
		group: 'Партнеры',
	},
	fields: [
		{
			name: 'image',
			label: 'Изображение',
			relationTo: 'media',
			type: 'upload',
			required: true,
		},
		{
			name: 'logo',
			label: 'Логотип',
			relationTo: 'media',
			type: 'upload',
			required: true,
		},
		{
			name: 'title',
			label: 'Название акции',
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
			name: 'bonus',
			label: 'Бонус',
			type: 'group',
			fields: [
				{
					name: 'labelRu',
					label: 'Бонус (Рус)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelEn',
					label: 'Бонус (En)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelKz',
					label: 'Бонус (Қаз)',
					type: 'text',
					required: true,
				},
			],
		},
		{
			name: 'additionalImage',
			label: 'Дополнительное изображение',
			relationTo: 'media',
			type: 'upload',
			required: false,
		},
	],
}

export default Promotions
