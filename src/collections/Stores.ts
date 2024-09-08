import { CollectionConfig } from 'payload/types'

const Stores: CollectionConfig = {
	slug: 'stores',
	labels: {
		singular: 'Магазин',
		plural: 'Магазины',
	},
	access: {
		read: () => true,
	},
	admin: {
		group: 'Дебетные карты',
	},
	fields: [
		{
			name: 'categories',
			label: 'Категории',
			type: 'relationship',
			relationTo: 'store-categories',
		},
	],
}

export default Stores
