import { ForSale } from '../blocks/ForSale'
import { Hero } from '../blocks/Hero'
import PageHeaderBlock from '../blocks/PageHeaderBlock'
import { PostsBlock } from '../blocks/PostsBlock'
import ProductCardsBlock from '../blocks/ProductCardsBlock'
import SliderHeroWithCardsBlock from '../blocks/SliderHeroWithCardsBlock'
import VerticalCardBlock from '../blocks/VerticalCardBlock'
import { contactCenter } from '../blocks/contactCenter'
import { descriptionWithRichtext } from '../blocks/descriptionWithRichtext'
import { detailsCoin } from '../blocks/detailsCoin'
import { faq } from '../blocks/faq'
import { form } from '../blocks/form'
import { guaranteeTypeCard } from '../blocks/guaranteeTypeCard'
import { horizontalStatisticCard } from '../blocks/horizontalStatisticCard'
import { information } from '../blocks/information'
import { informationCard } from '../blocks/informationCard'
import { ItemTypes } from '../blocks/itemTypes'
import { keyPointedCard } from '../blocks/keyPointedCard'
import { packageOffers } from '../blocks/packageOffers'
import { servicesCard } from '../blocks/servicesCard'
import { table } from '../blocks/table'
import { tariffCard } from '../blocks/tariffCard'
import { videoPlayer } from '../blocks/videoPlayer'
import { warningCard } from '../blocks/warningCard'
import { CollectionConfig } from 'payload/types'
import CardBlockWithIcon from "../blocks/CardBlockWithIcon";
import Partners from "../blocks/Partners";
import ServicePrivilege from "../blocks/ServicePrivilege";
import PrivateSlider from "../blocks/PrivateSlider";

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
				ItemTypes,
				table,
				detailsCoin,
				packageOffers,
				servicesCard,
				faq,
				SliderHeroWithCardsBlock,
				PageHeaderBlock,
				PostsBlock,
				ProductCardsBlock,
				VerticalCardBlock,
				form,
				horizontalStatisticCard,
				warningCard,
				keyPointedCard,
				descriptionWithRichtext,
				guaranteeTypeCard,
				tariffCard,
				contactCenter,
				informationCard,
				information,
				videoPlayer,
				ForSale,
				CardBlockWithIcon,
				Partners,
				ServicePrivilege,
				PrivateSlider
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
