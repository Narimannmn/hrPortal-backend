import { Hero } from '../blocks/Hero'
import { NumeratedCard } from '../blocks/NumeratedCard'
import { CollectionConfig } from 'payload/types'
import { ItemTypes } from '../blocks/itemTypes'
import { table } from '../blocks/table'
import { detailsCoin } from '../blocks/detailsCoin'
import { packageOffers } from '../blocks/packageOffers'
import { advantageCard } from '../blocks/advantageCard'
import { servicesCard } from '../blocks/servicesCard'
import { optionalCard } from '../blocks/optionalCard'
import { faq } from '../blocks/faq'

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
			],
		},
	],
}

export default Pages
