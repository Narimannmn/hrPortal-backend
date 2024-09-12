import { Block } from 'payload/types'

const SpaceFiller: Block = {
	slug: 'SpaceFiller',
	labels: {
		singular: 'Пустое пространство между двумя блоками',
		plural: 'Пустое пространство между двумя блоками',
	},
	fields: [
		{
			name: 'height',
			label: 'Высота блока',
			type: 'number',
			defaultValue: 10,
			required: true,
		},
	],
}

export default SpaceFiller
