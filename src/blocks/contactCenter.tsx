import { Block } from 'payload/types'

export const contactCenter: Block = {
	slug: 'contactCenter',
	labels: {
		singular: 'Карточка контактов',
		plural: 'Карточки контактов',
	},
	fields: [
		{
			name: 'cards',
			label: 'Карты',
			type: 'array',
			required: true,
			fields: [
				{
					name: 'title',
					label: 'Название',
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Название (Рус)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Название (En)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelKz',
							label: 'Название (Қаз)',
							type: 'text',
							required: true,
						},
					],
				},
				{
					name: 'description',
					label: 'Описание',
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Описание (Рус)',
							type: 'text',
							required: false,
						},
						{
							name: 'labelEn',
							label: 'Описание (En)',
							type: 'text',
							required: false,
						},
						{
							name: 'labelKz',
							label: 'Описание (Қаз)',
							type: 'text',
							required: false,
						},
					],
				},
				{
					name: 'details',
					label: 'Детали',
					type: 'array',
					required: true,
					minRows: 1,
					fields: [
						{
							name: 'logo',
							label: 'Лого',
							type: 'upload',
							relationTo: 'icons',
							required: true,
						},
						{
							name: 'label',
							label: 'Метка',
							type: 'group',
							fields: [
								{
									name: 'labelRu',
									label: 'Метка (Рус)',
									type: 'text',
									required: false,
								},
								{
									name: 'labelEn',
									label: 'Метка (En)',
									type: 'text',
									required: false,
								},
								{
									name: 'labelKz',
									label: 'Метка (Қаз)',
									type: 'text',
									required: false,
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
