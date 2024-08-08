import { Hero } from '../blocks/Hero'
import { NumeratedCard } from '../blocks/NumeratedCard'
import PageHeaderBlock from '../blocks/PageHeaderBlock'
import { PostsBlock } from '../blocks/PostsBlock'
import ProductCardsBlock from '../blocks/ProductCardsBlock'
import SliderHeroWithCardsBlock from '../blocks/SliderHeroWithCardsBlock'
import VerticalCardBlock from '../blocks/VerticalCardBlock'
import { advantageCard } from '../blocks/advantageCard'
import { detailsCoin } from '../blocks/detailsCoin'
import { ItemTypes } from '../blocks/itemTypes'
import { packageOffers } from '../blocks/packageOffers'
import { servicesCard } from '../blocks/servicesCard'
import { faq } from '../blocks/faq'
import { table } from '../blocks/table'
import { form } from '../blocks/form'
import { CollectionConfig } from 'payload/types'
import { horizontalStatisticCard } from '../blocks/horizontalStatisticCard'
import { simpleCard } from '../blocks/simpleCard'
import { warningCard } from '../blocks/warningCard'
import { keyPointedCard } from '../blocks/keyPointedCard'
import { descriptionWithRichtext } from '../blocks/descriptionWithRichtext'
import { guaranteeTypeCard } from '../blocks/guaranteeTypeCard'
import { tariffCard } from '../blocks/tariffCard'
import { contactCenter } from '../blocks/contactCenter'

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
		singular: 'Page',
		plural: 'Pages',
	},
	access: {
		read: () => true,
	},
	admin: {
		useAsTitle: 'name',
	},
	fields: [
		{
			name: 'name',
			label: 'Name',
			type: 'text',
			required: true,
		},
		{
			name: 'slug',
			label: 'Slug',
			type: 'text',
			required: true,
		},
		{
			name: 'layout',
			label: 'Layout',
			type: 'blocks',
			blocks: [
				Hero,
				NumeratedCard,
				ItemTypes,
				table,
				detailsCoin,
				packageOffers,
				advantageCard,
				servicesCard,
				faq,
				SliderHeroWithCardsBlock,
				PageHeaderBlock,
				PostsBlock,
				ProductCardsBlock,
				VerticalCardBlock,
				form,
				horizontalStatisticCard,
				simpleCard,
				warningCard,
				keyPointedCard,
				descriptionWithRichtext,
				guaranteeTypeCard,
				tariffCard,
				contactCenter,
			],
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
