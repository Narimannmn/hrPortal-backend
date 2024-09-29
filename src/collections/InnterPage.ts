import PageTabs from '../blocks/Tabs'
import { PageBlocks } from './blockList'
import { CollectionConfig } from 'payload/types'

const InnerPage: CollectionConfig = {
	slug: 'inner',
	labels: {
		singular: 'Внутренние страницы',
		plural: 'Внутренние страницы',
	},
	access: {
		read: () => true,
	},
	admin: {
		useAsTitle: 'section',
	},
	hooks: {
		beforeRead: [
			args => {
				const { doc, req } = args
				const cardId = req.query.cardId

				if (cardId && doc.card) {
					doc.card = doc.card.filter(card => card.id === cardId)
				}
				return doc
			},
		],
	},
	fields: [
		{
			name: 'layoutTheme',
			label: 'Тема оформления',
			type: 'select',
			defaultValue: 'light',
			options: [
				{
					label: 'Светлая',
					value: 'light',
				},
				{
					label: 'Темная',
					value: 'dark',
				},
			],
		},
		{
			name: 'section',
			label: 'Раздел',
			type: 'text',
			required: true,
		},
		{
			name: 'section_slug',
			label: 'Название которое будет отображаться в URL',
			type: 'text',
			required: true,
		},
		{
			name: 'card',
			label: 'Карточка',
			type: 'array',
			fields: [
				{
					name: 'image',
					label: 'Изображение',
					type: 'upload',
					relationTo: 'media',
					required: true,
				},
				{
					name: 'name',
					label: 'Название',
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Название (Ru)',
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
							label: 'Название (Kz)',
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
							label: 'Описание (Ru)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Описание (En)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelKz',
							label: 'Описание (Kz)',
							type: 'text',
							required: true,
						},
					],
				},
				{
					name: 'info',
					label: 'Информация',
					type: 'array',
					minRows: 1,
					maxRows: 4,
					fields: [
						{
							name: 'title',
							label: 'Заголовок',
							type: 'group',
							fields: [
								{
									name: 'labelRu',
									label: 'Заголовок (Ru)',
									type: 'text',
									required: true,
								},
								{
									name: 'labelEn',
									label: 'Заголовок (En)',
									type: 'text',
									required: true,
								},
								{
									name: 'labelKz',
									label: 'Заголовок (Kz)',
									type: 'text',
									required: true,
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
									label: 'Подзаголовок (Ru)',
									type: 'text',
									required: true,
								},
								{
									name: 'labelEn',
									label: 'Подзаголовок (En)',
									type: 'text',
									required: true,
								},
								{
									name: 'labelKz',
									label: 'Подзаголовок (Kz)',
									type: 'text',
									required: true,
								},
							],
						},
					],
				},
				{
					name: 'buttonTxt',
					label: 'Текст кнопки',
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Текст кнопки (Ru)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Текст кнопки (En)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelKz',
							label: 'Текст кнопки (Kz)',
							type: 'text',
							required: true,
						},
					],
				},
				{
					name: 'layout',
					label: 'Контент',
					type: 'blocks',
					blocks: [...PageBlocks, PageTabs],
				},
			],
		},
	],
}

export default InnerPage
