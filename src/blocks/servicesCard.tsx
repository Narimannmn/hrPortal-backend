import { Block } from 'payload/types'

export const servicesCard: Block = {
	slug: 'servicesCard',
	labels: {
		singular: 'Service Block',
		plural: 'Service Blocks',
	},
	fields: [
		{
			name: 'heading',
			label: 'Заголовок',
			type: 'text',
			required: true,
		},
		{
			name: 'intro',
			label: 'Введение',
			type: 'group',
			fields: [
				{
					name: 'image',
					label: 'Изображение',
					type: 'upload',
					relationTo: 'media',
					required: true,
				},
				{
					name: 'title',
					label: 'Заголовок введения',
					type: 'text',
					required: true,
				},
				{
					name: 'description',
					label: 'Описание введения',
					type: 'textarea',
					required: true,
				},
			],
		},
		{
			name: 'services',
			label: 'Услуги',
			type: 'array',
			minRows: 2,
			maxRows: 4,
			fields: [
				{
					name: 'title',
					label: 'Заголовок услуги',
					type: 'text',
					required: true,
				},
				{
					name: 'features',
					label: 'Особенности',
					type: 'array',
					fields: [
						{
							name: 'feature',
							label: 'Особенность',
							type: 'text',
							required: true,
						},
					],
					required: true,
				},
			],
			required: true,
		},
	],
}
