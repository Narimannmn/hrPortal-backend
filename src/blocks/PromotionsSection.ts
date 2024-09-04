import { Block } from 'payload/types'

export const PromotionsSection: Block = {
	slug: 'PromotionsSection',
	labels: {
		singular: 'Карты - Раздел акций',
		plural: 'Карты - Разделы акций',
	},
	fields: [
		{
			name: 'titles',
			label: 'Заголовки',
			type: 'group',
			fields: [
				{
					name: 'first_title',
					label: 'Первый заголовок',
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
					name: 'second_title',
					label: 'Второй заголовок',
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
					name: 'third_title',
					label: 'Третий заголовок',
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
					name: 'last_title',
					label: 'Последний заголовок',
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
		},
		{
			name: 'first_image',
			label: 'Первое изображение',
			type: 'upload',
			relationTo: 'media',
			required: true,
		},
		{
			name: 'second_image',
			label: 'Второе изображение',
			type: 'upload',
			relationTo: 'media',
			required: true,
		},
	],
}

export default PromotionsSection
