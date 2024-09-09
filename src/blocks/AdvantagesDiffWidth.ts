import { Block } from 'payload/types'

const AdvantagesDiffWidth: Block = {
	slug: 'AdvantagesDiffWidth',
	labels: {
		singular: 'Приватные карточки "Преимущества" c разной шириной',
		plural: 'Приватные карточки "Преимущества" c разной шириной',
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

export default AdvantagesDiffWidth
