import { Accordion } from './static/accordion'
import { PlainList } from './static/plainList'
import { SectionList } from './static/sectionList'
import { Block } from 'payload/types'

export const DocList: Block = {
	slug: 'DocList',
	labels: {
		singular: 'Документ',
		plural: 'Документы',
	},
	fields: [
		{
			name: 'docType',
			label: 'Тип документа',
			type: 'select',
			required: true,
			options: [
				{
					label: 'Табы',
					value: 'tabs',
				},
				{
					label: 'Cписок документов по разделам',
					value: 'sectionList',
				},
			],
		},
		{
			name: 'tabs',
			label: 'Контент табов',
			type: 'array',
			fields: [
				{
					name: 'tabName',
					label: 'Название таба',
					type: 'group',
					fields: [
						{
							name: 'labelKz',
							label: 'Таб (Қаз)',
							type: 'text',
						},
						{
							name: 'labelRu',
							label: 'Таб (Рус)',
							type: 'text',
						},
						{
							name: 'labelEn',
							label: 'Таб (En)',
							type: 'text',
						},
					],
				},
				{
					name: 'tabContentVariant',
					label: 'Варианты контента',
					type: 'select',
					required: true,
					options: [
						{
							label: 'Аккордеон',
							value: 'accordion',
						},
						{
							label: 'Список',
							value: 'list',
						},
						{
							label: 'Список разделенный по секциям и *внутренним аккордеоном',
							value: 'sectionList',
						},
					],
				},
				{
					name: 'list',
					label: 'Контент списка документов',
					type: 'group',
					fields: [...PlainList],
					admin: {
						condition: (_, siblingData) =>
							siblingData.tabContentVariant === 'list',
					},
				},
				{
					name: 'sectionList',
					label: 'Cписок документов по разделам',
					type: 'array',
					fields: [...SectionList],
					admin: {
						condition: (_, siblingData) =>
							siblingData.tabContentVariant === 'sectionList',
					},
				},
				{
					name: 'accordion',
					label: 'Контент аккордеона',
					type: 'array',
					fields: [...Accordion],
					admin: {
						condition: (_, siblingData) =>
							siblingData.tabContentVariant === 'accordion',
					},
				},
			],
			admin: {
				condition: (_, siblingData) => siblingData.docType === 'tabs',
			},
		},
		{
			name: 'sectionList',
			label: 'Cписок документов по разделам',
			type: 'array',
			fields: [...SectionList],
			admin: {
				condition: (_, siblingData) => siblingData.docType === 'sectionList',
			},
		},
	],
}
