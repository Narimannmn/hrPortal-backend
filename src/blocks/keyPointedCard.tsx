import { Block } from 'payload/types'

export const keyPointedCard: Block = {
	slug: 'keyPointedCard',
	labels: {
		singular: 'Карта с ключевыми пунктами',
		plural: 'Карты с ключевыми пунктами',
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
			name: 'bulletPoints',
			type: 'array',
			label: 'Пункты',
			fields: [
				{
					name: 'labelRu',
					type: 'text',
					label: 'Текст (на русском)',
					required: true,
				},
				{
					name: 'labelEn',
					type: 'text',
					label: 'Текст (на английском)',
					required: true,
				},
				{
					name: 'labelKz',
					type: 'text',
					label: 'Текст (на казахском)',
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
	],
}
