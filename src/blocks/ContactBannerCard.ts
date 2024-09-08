import { Block } from 'payload/types'

export const ContactBannerCard: Block = {
	slug: 'ContactBannerCard',
	labels: {
		singular: 'Баннер-Карточка контактной информации',
		plural: 'Баннер-Карточка контактной информации',
	},
	fields: [
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
			name: 'phoneNumber',
			label: 'Номер телефона',
			type: 'group',
			fields: [
				{
					name: 'labelRu',
					label: 'Метка (Рус)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelEn',
					label: 'Метка (En)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelKz',
					label: 'Метка (Қаз)',
					type: 'text',
					required: true,
				},
			],
		},
		{
			name: 'image',
			label: 'Изображение',
			type: 'upload',
			relationTo: 'media',
			required: true,
		},
	],
}

export default ContactBannerCard
