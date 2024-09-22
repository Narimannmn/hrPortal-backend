import PageTabs from '../blocks/Tabs'
import { PageBlocks } from './blockList'
import { CollectionConfig } from 'payload/types'

const extractSlug = data => {
	if (Array.isArray(data)) {
		return data.map(item => {
			if (
				item.pageSlug &&
				typeof item.pageSlug === 'object' &&
				item.pageSlug.slug
			) {
				item.pageSlug = item.pageSlug.slug
			}
			if (item.cards) {
				item.cards = extractSlug(item.cards)
			}
			if (
				item.footerLnk &&
				item.footerLnk.pageSlug &&
				typeof item.footerLnk.pageSlug === 'object' &&
				item.footerLnk.pageSlug.slug
			) {
				item.footerLnk.pageSlug = item.footerLnk.pageSlug.slug
			}
			return item
		})
	}
	return data
}

const Pages: CollectionConfig = {
	slug: 'pages',
	labels: {
		singular: 'Страница',
		plural: 'Страницы',
	},
	access: {
		read: () => true,
	},
	admin: {
		useAsTitle: 'name',
		group: 'Навигация',
	},
	fields: [
		{
			name: 'name',
			label: 'Название',
			type: 'text',
			required: true,
		},
		{
			name: 'slug',
			label: 'Слаг',
			type: 'text',
			required: true,
		},
		{
			name: 'index',
			label: 'Главная страница',
			type: 'checkbox',
			required: false,
			defaultValue: false,
		},
		{
			name: 'layoutTheme',
			label: 'Тема Layout',
			type: 'radio',
			required: false,
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
			name: 'layout',
			label: 'Блоки',
			type: 'blocks',
			blocks: [...PageBlocks, PageTabs],
		},
	],
	hooks: {
		afterRead: [
			({ doc }) => {
				if (doc.layout && Array.isArray(doc.layout)) {
					doc.layout = doc.layout.map(block => {
						if (block.blockType === 'SliderHeroWithCardsBlock' && block.list) {
							block.list = extractSlug(block.list)
						}
						if (block.blockType === 'SliderHeroWithCardsBlock' && block.cards) {
							block.cards = extractSlug(block.cards)
						}
						if (block.blockType === 'productCards' && block.cards) {
							block.cards = extractSlug(block.cards)
						}
						if (block.blockType === 'VerticalCardBlock' && block.cards) {
							block.cards = extractSlug(block.cards)
						}
						return block
					})
				}
				return doc
			},
		],
	},
}

export default Pages
