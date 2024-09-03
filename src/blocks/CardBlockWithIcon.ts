import { Block } from 'payload/types'

const CardBlockWithIcon: Block = {
	slug: 'CardBlockWithIcon',
	labels: {
		singular: 'Карточка с иконкой',
		plural: 'Карточка с иконкой',
	},
	fields: [
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
							type: 'richText',
							required: false,
						},
						{
							name: 'labelEn',
							label: 'Значение (En)',
							type: 'richText',
							required: false,
						},
						{
							name: 'labelKz',
							label: 'Значение (Қаз)',
							type: 'richText',
							required: false,
						},
					],
				},
			],
		}
	],
}

export default CardBlockWithIcon
