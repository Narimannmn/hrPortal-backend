import { Block } from 'payload/types'

export const table: Block = {
	slug: 'table',
	labels: {
		singular: 'Table Block',
		plural: 'Table Blocks',
	},
	fields: [
		{
			name: 'heading',
			label: 'Заголовок',
			type: 'text',
			required: true,
		},
		{
			name: 'headers',
			label: 'Headers',
			type: 'array',
			fields: [
				{
					name: 'label',
					label: 'Label',
					type: 'text',
					required: true,
				},
			],
			required: true,
		},
		{
			name: 'rows',
			label: 'Rows',
			type: 'array',
			minRows: 1,
			fields: [
				{
					name: 'cells',
					label: 'Cells',
					type: 'array',
					fields: [
						{
							name: 'value',
							label: 'Value',
							type: 'text',
							required: true,
						},
					],
					required: true,
				},
			],
			required: true,
		},
	],
}
