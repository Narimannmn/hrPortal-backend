import { Block } from 'payload/types'

export const packageOffers: Block = {
	slug: 'packageOffers',
	labels: {
		singular: 'Package Offers Block',
		plural: 'Package Offers Blocks',
	},
	fields: [
		{
			name: 'heading',
			label: 'Заголовок',
			type: 'text',
			required: true,
		},
		{
			name: 'packages',
			label: 'Packages',
			type: 'array',
			fields: [
				{
					name: 'icon',
					label: 'Icon',
					type: 'upload',
					relationTo: 'media',
					required: true,
				},
				{
					name: 'title',
					label: 'Title',
					type: 'text',
					required: true,
				},
				{
					name: 'price',
					label: 'Price',
					type: 'text',
					required: true,
				},
				{
					name: 'priceTooltip',
					label: 'Price Tooltip',
					type: 'group',
					fields: [
						{
							name: 'enabled',
							label: 'Enabled',
							type: 'checkbox',
							required: true,
						},
						{
							name: 'text',
							label: 'Tooltip Text',
							type: 'text',
							required: false,
						},
						{
							name: 'iconPath',
							label: 'Icon Path',
							type: 'upload',
							relationTo: 'media',
							required: false,
						},
					],
				},
				{
					name: 'features',
					label: 'Features',
					type: 'array',
					fields: [
						{
							name: 'label',
							label: 'Feature Label',
							type: 'text',
							required: true,
						},
						{
							name: 'value',
							label: 'Feature Value',
							type: 'text',
							required: true,
						},
						{
							name: 'tooltip',
							label: 'Tooltip',
							type: 'group',
							fields: [
								{
									name: 'enabled',
									label: 'Enabled',
									type: 'checkbox',
									required: true,
								},
								{
									name: 'text',
									label: 'Tooltip Text',
									type: 'text',
									required: false,
								},
								{
									name: 'iconPath',
									label: 'Icon Path',
									type: 'upload',
									relationTo: 'media',
									required: false,
								},
							],
						},
					],
				},
			],
			required: true,
		},
	],
}
