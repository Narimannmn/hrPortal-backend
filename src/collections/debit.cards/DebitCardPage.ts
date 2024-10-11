import PageTabs from '../../blocks/Tabs'
import { PageBlocks } from '../blockList'
import { CollectionConfig } from 'payload/types'

const DebitCardPage: CollectionConfig = {
	slug: 'dbtp',
	labels: {
		singular: 'Страница дебетовой карты',
		plural: 'Страницы дебетовых карт',
	},
	admin: {
		useAsTitle: 'Дебетовая карта',
		group: 'Дебетовые карты',
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'debitCard',
			label: 'Дебетовая карта',
			type: 'relationship',
			relationTo: 'debit-cards',
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

export default DebitCardPage
