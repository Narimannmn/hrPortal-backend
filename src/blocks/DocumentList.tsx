import { Block } from 'payload/types'

export const DocumentList: Block = {
	slug: 'DocList',
	labels: {
		singular: 'Документ',
		plural: 'Документы',
	},
	fields: [
		{
			name: 'docType',
			label: 'Тип документа',
			type: 'select',
			options: [
				{
					label: 'Табы',
					value: 'tabs',
				},
				{
					label: 'Аккордеон',
					value: 'accordion',
				},
				{
					label: 'Аккордеон с табами',
					value: 'accordion-tabs',
				},
				{
					label: 'Список',
					value: 'list',
				},
			],
			required: true,
		},
		{
			name: 'tabsContent',
			label: 'Контент табов',
			type: 'array',
			fields: [
				{
					name: 'tabs',
					label: 'Табы',
					type: 'array',
					fields: [
						{
							name: 'tab',
							label: 'Таб',
							type: 'group',
							fields: [
								{
									name: 'labelKz',
									label: 'Таб (Қаз)',
									type: 'text',
								},
								{
									name: 'labelRu',
									label: 'Таб (Рус)',
									type: 'text',
								},
								{
									name: 'labelEn',
									label: 'Таб (En)',
									type: 'text',
								},
							],
						},
						{
							name: 'content',
							type: 'array',
							label: 'Контент таба',
							fields: [
								{
									name: 'doc',
									type: 'upload',
									label: 'Документ',
									relationTo: 'files',
									required: true,
								},
							],
						},
						{
							name: 'warnText',
							label: 'Предупреждение',
							type: 'text',
						},
					],
				},
			],
			admin: {
				condition: data => {
					console.log(data)
					return data.docType === 'tabs' || data.docType === 'accordion-tabs'
				},
			},
		},
		{
			name: 'accContent',
			label: 'Контент аккордеона',
			type: 'array',
			fields: [
				{
					name: 'label',
					label: 'Название аккордеона',
					type: 'group',
					fields: [
						{
							name: 'labelKz',
							label: 'Қаз',
							type: 'text',
						},
						{
							name: 'labelRu',
							label: 'Рус',
							type: 'text',
						},
						{
							name: 'labelEn',
							label: 'En',
							type: 'text',
						},
					],
				},
				{
					name: 'accContent',
					label: 'Содержимое аккордеона',
					type: 'array',
					fields: [
						{
							name: 'doc',
							type: 'upload',
							label: 'Документ',
							relationTo: 'files',
							required: true,
						},
						{
							name: 'subAcc',
							label: 'Под-аккордеон',
							type: 'array',
							fields: [
								{
									name: 'doc',
									type: 'upload',
									label: 'Документ',
									relationTo: 'files',
									required: true,
								},
							],
						},
						{
							name: 'warnText',
							label: 'Предупреждение',
							type: 'text',
						},
					],
				},
				{
					name: 'warnText',
					label: 'Предупреждение',
					type: 'text',
				},
			],
			admin: {
				condition: data => data.docType === 'accordion',
			},
		},
		{
			name: 'listContent',
			label: 'Контент списка',
			type: 'array',
			fields: [
				{
					name: 'listItem',
					label: 'Элемент списка',
					type: 'array',
					fields: [
						{
							name: 'title',
							label: 'Заголовок',
							type: 'group',
							fields: [
								{
									name: 'labelKz',
									label: 'Қаз',
									type: 'text',
								},
								{
									name: 'labelRu',
									label: 'Рус',
									type: 'text',
								},
								{
									name: 'labelEn',
									label: 'En',
									type: 'text',
								},
							],
						},
						{
							name: 'doc',
							type: 'upload',
							label: 'Документ',
							relationTo: 'files',
							required: true,
						},
						{
							name: 'warnText',
							label: 'Предупреждение',
							type: 'text',
						},
					],
				},
			],
			admin: {
				condition: data => data.docType === 'list',
			},
		},
	],
}
