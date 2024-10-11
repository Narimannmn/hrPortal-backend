import PageTabs from '../../blocks/Tabs'
import { PageBlocks } from '../blockList'
import { CollectionConfig } from 'payload/types'

const CreditCardPage: CollectionConfig = {
	slug: 'ccp',
	labels: {
		singular: 'Страница кредитной карты',
		plural: 'Страницы кредитных карт',
	},
	admin: {
		useAsTitle: 'Кредитная карта',
		group: 'Кредитные карты',
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'creditCard',
			label: 'Кредитная карта',
			type: 'relationship',
			relationTo: 'credit-cards',
			required: true,
		},
		{
			name: 'layout',
			label: 'Блоки',
			type: 'blocks',
			blocks: [...PageBlocks, PageTabs],
		},
	],
}

export default CreditCardPage
