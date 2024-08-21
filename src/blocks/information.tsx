import { Block } from 'payload/types'

export const information: Block = {
	slug: 'information',
	labels: {
		singular: 'Информация',
		plural: 'Информации',
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
				},
				{
					name: 'labelEn',
					label: 'Заголовок (En)',
					type: 'text',
				},
				{
					name: 'labelKz',
					label: 'Заголовок (Қаз)',
					type: 'text',
				},
			],
		},
		{
			name: 'sections',
			label: 'Секции',
			type: 'array',
			required: true,
			fields: [
				{
					name: 'title',
					label: 'Заголовок секции',
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Заголовок секции (Рус)',
							type: 'text',
						},
						{
							name: 'labelEn',
							label: 'Заголовок секции (En)',
							type: 'text',
						},
						{
							name: 'labelKz',
							label: 'Заголовок секции (Қаз)',
							type: 'text',
						},
					],
				},
				{
					name: 'details',
					label: 'Детали',
					type: 'array',
					required: true,
					fields: [
						{
							name: 'label',
							label: 'Метка',
							type: 'group',
							fields: [
								{
									name: 'labelRu',
									label: 'Метка (Рус)',
									type: 'text',
									required: true,
								},
								{
									name: 'labelEn',
									label: 'Метка (En)',
									type: 'text',
									required: true,
								},
								{
									name: 'labelKz',
									label: 'Метка (Қаз)',
									type: 'text',
									required: true,
								},
							],
						},
						{
							name: 'value',
							label: 'Значение',
							type: 'group',
							fields: [
								{
									name: 'labelRu',
									label: 'Значение (Рус)',
									type: 'richText',
									required: true,
								},
								{
									name: 'labelEn',
									label: 'Значение (En)',
									type: 'richText',
									required: true,
								},
								{
									name: 'labelKz',
									label: 'Значение (Қаз)',
									type: 'richText',
									required: true,
								},
							],
						},
					],
				},
			],
		},
	],
}