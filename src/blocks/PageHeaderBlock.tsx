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
			defaultValue: 'light',
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
			name: 'size',
			label: 'Размер текста',
			type: 'radio',
			defaultValue: 'lg',
			options: [
				{
					label: 'Большой',
					value: 'lg',
				},
				{
					label: 'Средний',
					value: 'md',
				}
			]
		},
		{
			name: 'marginY',
			label: 'Отступы по Y координате',
			type: 'group',
			fields: [
				{
					name: 'top',
					label: 'Верх',
					type: 'number',
					defaultValue: 76,
					required: true
				},
				{
					name: 'bottom',
					label: 'Низ',
					type: 'number',
					defaultValue: 40,
					required: true,
				},
				{
					name: 'mobileTop',
					label: 'Верх на мобилках',
					type: 'number',
					defaultValue: 48,
					required: true,
				},
				{
					name: 'mobileBottom',
					label: 'Низ на мобилках',
					type: 'number',
					defaultValue: 20,
					required: true,
				},
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
