import { Block } from 'payload/types'

export const AdditionalBonusSection: Block = {
	slug: 'AdditionalBonusSection',
	labels: {
		singular: 'Карты - Бонусный раздел',
		plural: 'Карты - Бонусные разделы',
	},
	fields: [
		{
			name: 'list',
			label: 'Список',
			type: 'array',
			maxRows: 3,
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
		},
	],
}

export default AdditionalBonusSection
