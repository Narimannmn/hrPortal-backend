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
			type: 'group',
			fields: [
				{
					name: 'labelRu',
					label: 'Заголовок (Рус)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelEn',
					label: 'Заголовок (En)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelKz',
					label: 'Заголовок (Қаз)',
					type: 'text',
					required: true,
				},
			],
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
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Заголовок (Рус)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Заголовок (En)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelKz',
							label: 'Заголовок (Қаз)',
							type: 'text',
							required: true,
						},
					],
				},
				{
					name: 'description',
					label: 'Описание введения',
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Описание (Рус)',
							type: 'textarea',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Описание (En)',
							type: 'textarea',
							required: true,
						},
						{
							name: 'labelKz',
							label: 'Описание (Қаз)',
							type: 'textarea',
							required: true,
						},
					],
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
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Заголовок (Рус)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Заголовок (En)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelKz',
							label: 'Заголовок (Қаз)',
							type: 'text',
							required: true,
						},
					],
				},
				{
					name: 'features',
					label: 'Особенности',
					type: 'array',
					fields: [
						{
							name: 'feature',
							label: 'Особенность',
							type: 'group',
							fields: [
								{
									name: 'labelRu',
									label: 'Особенность (Рус)',
									type: 'text',
									required: true,
								},
								{
									name: 'labelEn',
									label: 'Особенность (En)',
									type: 'text',
									required: true,
								},
								{
									name: 'labelKz',
									label: 'Особенность (Қаз)',
									type: 'text',
									required: true,
								},
							],
						},
					],
					required: true,
				},
			],
			required: true,
		},
	],
}
