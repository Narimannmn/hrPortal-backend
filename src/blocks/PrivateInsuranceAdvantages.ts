import { Block } from 'payload/types'

const PrivateInsuranceAdvantages: Block = {
	slug: 'PrivateInsuranceAdvantages',
	labels: {
		singular: 'Приват Карточки для преимущества странховании',
		plural: 'Приват Карточки для преимущества странховании',
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
					name: 'description',
					label: 'Описание',
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Название (Рус)',
							type: 'richText',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Название (En)',
							type: 'richText',
							required: true,
						},
						{
							name: 'labelKz',
							label: 'Название (Қаз)',
							type: 'richText',
							required: true,
						},
					],
				}
			],
		}
	],
}

export default PrivateInsuranceAdvantages
