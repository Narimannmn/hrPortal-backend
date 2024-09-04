import { Block } from 'payload/types'

export const FreeServiceCardSection: Block = {
	slug: 'FreeServiceCardSection',
	labels: {
		singular: 'Карты - Карточка бесплатного сервиса',
		plural: 'Карты - Карточки бесплатного сервиса',
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
	],
}

export default FreeServiceCardSection
