import { Block } from 'payload/types'

const CardBlockWithIcon: Block = {
	slug: 'CardBlockWithIcon',
	labels: {
		singular: 'Карточка с иконкой',
		plural: 'Карточка с иконкой',
	},
	fields: [
		{
			name: 'maxColumnCount',
			label: 'Максимальное число колонок по горизонтали',
			type: 'radio',
			defaultValue: '3',
			options: [
				{
					label: '2',
					value: '2',
				},
				{
					label: '3',
					value: '3',
				},
				{
					label: '4',
					value: '4',
				},
			],
			required: false,
		},
		{
			name: 'cards',
			label: 'Карточки',
			type: 'array',
			fields: [
				{
					name: 'icon',
					label: 'Лого',
					type: 'upload',
					relationTo: 'icons',
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
					name: 'subTitle',
					label: 'Описание',
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Значение (Рус)',
							type: 'text',
							required: false,
						},
						{
							name: 'labelEn',
							label: 'Значение (En)',
							type: 'text',
							required: false,
						},
						{
							name: 'labelKz',
							label: 'Значение (Қаз)',
							type: 'text',
							required: false,
						},
					],
				},
				{
					name: 'subTitleColor',
					label: 'Цвет текста описании',
					type: 'radio',
					required: false,
					defaultValue: 'white',
					admin: {
						condition: (_, siblingData) => {
							const { labelRu, labelKz, labelEn } = siblingData.subTitle
							return labelRu || labelKz || labelEn;
						},
					},
					options: [
						{
							label: 'Белый',
							value: 'white',
						},
						{
							label: 'Серый',
							value: 'gray',
						}
					]
				},
			],
		}
	],
}

export default CardBlockWithIcon
