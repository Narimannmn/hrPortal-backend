import { Block } from 'payload/types'

export const detailsCoin: Block = {
	slug: 'detailsCoin',
	labels: {
		singular: 'Coin Details Block',
		plural: 'Coin Details Blocks',
	},
	fields: [
		{
			name: 'title',
			label: 'Заголовок',
			type: 'text',
			required: true,
		},
		{
			name: 'description',
			label: 'Описание',
			type: 'textarea',
			required: true,
		},
		{
			name: 'details',
			label: 'Детали',
			type: 'array',
			fields: [
				{
					name: 'label',
					label: 'Наименование',
					type: 'text',
					required: true,
				},
				{
					name: 'value',
					label: 'Значение',
					type: 'text',
					required: true,
				},
			],
			required: true,
		},
	],
}
