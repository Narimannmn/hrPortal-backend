import { Block } from 'payload/types'

export const DigitalCardSection: Block = {
	slug: 'DigitalCardSection',
	labels: {
		singular: 'Карты - Раздел цифровой карты',
		plural: 'Карты - Разделы цифровых карт',
	},
	fields: [
		{
			name: 'image',
			label: 'Изображение',
			type: 'upload',
			relationTo: 'media',
			required: true,
		},
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
			name: 'description',
			label: 'Описание',
			type: 'group',
			fields: [
				{
					name: 'labelRu',
					label: 'Описание (Рус)',
					type: 'textarea',
					required: true,
				},
				{
					name: 'labelEn',
					label: 'Описание (En)',
					type: 'textarea',
					required: true,
				},
				{
					name: 'labelKz',
					label: 'Описание (Қаз)',
					type: 'textarea',
					required: true,
				},
			],
		},
	],
}

export default DigitalCardSection
