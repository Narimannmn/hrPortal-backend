import { Block } from 'payload/types'

const PageHeaderBlock: Block = {
	slug: 'PageHeader',
	labels: {
		singular: 'Заголовок блока',
		plural: 'Заголовок блока',
	},
	fields: [
		{
			name: 'title',
			label: 'Title',
			type: 'text',
			required: true,
		},
		{
			name: 'subtitle',
			label: 'Subtitle',
			type: 'text',
		},
	],
}

export default PageHeaderBlock
