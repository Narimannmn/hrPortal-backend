import { Block } from 'payload/types'

export const TariffLimitsSection: Block = {
	slug: 'TariffLimitsSection',
	labels: {
		singular: 'Карты - Раздел лимитов тарифа',
		plural: 'Карты - Разделы лимитов тарифа',
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
			name: 'descriptionList',
			label: 'Список описаний',
			type: 'array',
			required: true,
			fields: [
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
			],
		},
		{
			name: 'chartBars',
			label: 'Столбцы диаграммы',
			type: 'array',
			required: true,
			minRows: 3,
			maxRows: 3,
			fields: [
				{
					name: 'height',
					label: 'Высота столбца',
					type: 'text',
					required: true,
				},
			],
		},
	],
}

export default TariffLimitsSection
