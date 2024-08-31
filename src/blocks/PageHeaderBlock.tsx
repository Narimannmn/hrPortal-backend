import { Block } from 'payload/types'

const PageHeaderBlock: Block = {
	slug: 'PageHeader',
	labels: {
		singular: 'Заголовок блока',
		plural: 'Заголовок блока',
	},
	fields: [
		{
			name: 'theme',
			label: 'Тема',
			type: 'radio',
			options: [
				{
					label: 'Светлая',
					value: 'light',
				},
				{
					label: 'Темная',
					value: 'dark',
				}
			]
		},
		{
			name: 'title',
			label: 'Заголовок',
			type: 'group',
			fields: [
				{
					name: 'labelRu',
					label: 'Заголовок (Рус)',
					type: 'text',
					required: false,
				},
				{
					name: 'labelEn',
					label: 'Заголовок (En)',
					type: 'text',
					required: false,
				},
				{
					name: 'labelKz',
					label: 'Заголовок (Қаз)',
					type: 'text',
					required: false,
				},
			],
		},
		{
			name: 'subtitle',
			label: 'Подзаголовок',
			type: 'group',
			fields: [
				{
					name: 'labelRu',
					label: 'Подзаголовок (Рус)',
					type: 'text',
					required: false,
				},
				{
					name: 'labelEn',
					label: 'Подзаголовок (En)',
					type: 'text',
					required: false,
				},
				{
					name: 'labelKz',
					label: 'Подзаголовок (Қаз)',
					type: 'text',
					required: false,
				},
			],
		},
	],
}

export default PageHeaderBlock
