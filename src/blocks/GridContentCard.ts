import { Block } from 'payload/types'

const GridContentCard: Block = {
	slug: 'GridContentCard',
	labels: {
		singular: 'Карты cетка',
		plural: 'Карточки cетка',
	},
	fields: [
		{
			name: 'cards',
			label: 'Карточки',
			type: 'array',
			fields: [
				{
					name: 'img',
					label: 'Изображение',
					type: 'upload',
					relationTo: 'media',
					required: true,
				},
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
					name: 'gridRowFr',
					label: 'Длина карточки',
					type: 'radio',
					required: false,
					defaultValue: "1fr",
					options: [
						{
							label: '1fr',
							value: '1fr',
						},
						{
							label: '2fr',
							value: '2fr',
						},
					]
				},
                {
					name: 'gridColumnFr',
					label: 'Ширина карточки',
					type: 'radio',
					required: false,
					defaultValue: "1fr",
					options: [
						{
							label: '1fr',
							value: '1fr',
						},
						{
							label: '2fr',
							value: '2fr',
						},
					]
				},
				{
					name: 'plainDescription',
					label: 'Описание',
					type: 'group',
					admin: {
						condition: (_, siblingData) => siblingData.gridColumnFr === '1fr',
					},
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
					name: 'listDescription',
					label: 'Описание списком',
					type: 'array',
					admin: {
						condition: (_, siblingData) => siblingData.gridColumnFr === '2fr',
					},
					fields: [
						{
							name: 'label',
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
							name: 'value',
							label: 'Значение',
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
					]
				}
			],
		}
	],
}

export default GridContentCard
