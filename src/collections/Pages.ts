import { Hero } from '../blocks/Hero'
import { NumeratedCard } from '../blocks/NumeratedCard'
import SliderHeroWithCardsBlock from '../blocks/SliderHeroWithCardsBlock'
import { advantageCard } from '../blocks/advantageCard'
import { detailsCoin } from '../blocks/detailsCoin'
import { ItemTypes } from '../blocks/itemTypes'
import { optionalCard } from '../blocks/optionalCard'
import { packageOffers } from '../blocks/packageOffers'
import { servicesCard } from '../blocks/servicesCard'
import { optionalCard } from '../blocks/optionalCard'

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
				optionalCard,
				faq,
				SliderHeroWithCardsBlock,
			],
		},
	],
}

export default Pages
