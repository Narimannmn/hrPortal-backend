import { CollectionConfig } from 'payload/types'

const MenuOrder: CollectionConfig = {
	slug: 'menu-order',
	labels: {
		singular: 'Порядок меню',
		plural: 'Порядок меню',
	},
	access: {
		read: () => true,
	},
	admin: {
		group: 'Навигация',
	},
	fields: [
		{
			name: 'menuItems',
			label: 'Пункты меню',
			type: 'array',
			fields: [
				{
					name: 'menuItem',
					label: 'Пункт меню',
					type: 'relationship',
					relationTo: 'menu-items',
					required: true,
				},
			],
		},
	],
}

export default MenuOrder
