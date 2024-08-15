import { Block } from 'payload/types'

export const horizontalStatisticCard: Block = {
	slug: 'horizontalStatisticCard',
	labels: {
		singular: 'Статистическая карточка',
		plural: 'Статистические карточки',
	},
	fields: [
		{
			name: 'cards',
			label: 'Карточки',
			type: 'array',
			fields: [
				{
					name: 'statistic',
					label: 'Статистика',
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Статистика (Рус)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Статистика (En)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelKz',
							label: 'Статистика (Қаз)',
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
					name: 'image',
					label: 'Изображение',
					type: 'upload',
					relationTo: 'media',
					required: true,
				},
			],
		},
	],
}
