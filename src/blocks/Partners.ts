import { Block } from 'payload/types'

const Partners: Block = {
	slug: 'Partners',
	labels: {
		singular: 'Список партнеров',
		plural: 'Список партнеров',
	},
	fields: [
		{
			name: 'description',
			label: 'Описание',
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
			name: 'icons',
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
			],
		},
	],
}

export default Partners
