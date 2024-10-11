import { CollectionConfig } from 'payload/types'

const CreditCards: CollectionConfig = {
	slug: 'credit-cards',
	labels: {
		singular: 'Кредитная карта',
		plural: 'Кредитные карты',
	},
	admin: {
		useAsTitle: 'title.labelRu',
		group: 'Кредитные карты',
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'category',
			label: 'Выбрать категорию',
			type: 'relationship',
			relationTo: 'credit-cards-categories',
			required: true,
		},
		{
			name: 'image',
			label: 'Изображение',
			type: 'upload',
			relationTo: 'media',
			required: true,
		},
		{
			name: 'title',
			label: 'Название карты',
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
			name: 'description',
			label: 'Описание карты',
			type: 'group',
			fields: [
				{
					name: 'labelRu',
					label: 'Описание (Рус)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelEn',
					label: 'Описание (En)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelKz',
					label: 'Описание (Қаз)',
					type: 'text',
					required: true,
				},
			],
		},
		{
			name: 'info_list',
			label: 'Базовая информация',
			type: 'array',
			minRows: 1,
			maxRows: 3,
			fields: [
				{
					name: 'info_title',
					label: 'Наименование',
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Наименование (Рус)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Наименование (En)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelKz',
							label: 'Наименование (Қаз)',
							type: 'text',
							required: true,
						},
					],
				},
				{
					name: 'info_description',
					label: 'Описание',
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Описание (Рус)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Описание (En)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelKz',
							label: 'Описание (Қаз)',
							type: 'text',
							required: true,
						},
					],
				},
			],
		},
	],
}

export default CreditCards
