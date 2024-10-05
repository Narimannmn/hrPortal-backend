import { PageBlocks } from '../collections/blockList'
import { Block } from 'payload/types'

const PageTabs: Block = {
	slug: 'PageTabs',
	labels: {
		singular: 'Табы на странице',
		plural: 'Таб на странице',
	},
	fields: [
		{
			name: 'title',
			label: 'Заголовок',
			type: 'group',
			fields: [
				{
					name: 'labelKz',
					label: 'Заголовок на казахском',
					type: 'text',
					required: false,
				},
				{
					name: 'labelEn',
					label: 'Заголовок на английском',
					type: 'text',
					required: false,
				},
				{
					name: 'labelRu',
					label: 'Заголовок на русском',
					type: 'text',
					required: false,
				},
			],
		},
		{
			name: 'bgColor',
			label: 'Цвет фона',
			type: 'select',
			defaultValue: '',
			options: [
				{ label: 'По умолчанию', value: '' },
				{ label: 'Белый', value: 'ffffff' },
				{ label: 'Темный', value: '000000' },
			],
		},
		{
			name: 'tabs',
			label: 'Табы',
			type: 'array',
			fields: [
				{
					name: 'labels',
					label: 'Название таба',
					type: 'group',
					fields: [
						{
							name: 'labelKz',
							label: 'Название таба на казахском',
							type: 'text',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Название таба на английском',
							type: 'text',
							required: true,
						},
						{
							name: 'labelRu',
							label: 'Название таба на русском',
							type: 'text',
							required: true,
						},
					],
				},
				{
					name: 'content',
					label: 'Контент',
					type: 'blocks',
					blocks: PageBlocks,
				},
			],
		},
	],
}

export default PageTabs
