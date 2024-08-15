import { Block } from 'payload/types'

export const informationCard: Block = {
	slug: 'informationCard',
	labels: {
		singular: 'Карточка со списком информации',
		plural: 'Карточки со списком информации',
	},
	fields: [
		{
			name: 'cards',
			label: 'Карточки',
			type: 'array',
			fields: [
				{
					name: 'title',
					label: 'Название',
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
					name: 'details',
					label: 'Детали',
					type: 'array',
					required: true,
					fields: [
						{
							name: 'logo',
							label: 'Лого',
							type: 'upload',
							relationTo: 'icons',
							required: true,
						},
						{
							name: 'label',
							label: 'Метка',
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
							name: 'value',
							label: 'Значение',
							type: 'group',
							fields: [
								{
									name: 'labelRu',
									label: 'Значение (Рус)',
									type: 'richText',
									required: true,
								},
								{
									name: 'labelEn',
									label: 'Значение (En)',
									type: 'richText',
									required: true,
								},
								{
									name: 'labelKz',
									label: 'Значение (Қаз)',
									type: 'richText',
									required: true,
								},
							],
						},
					],
				},
			],
		},
	],
}
