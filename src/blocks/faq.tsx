import { Block } from 'payload/types'

export const faq: Block = {
	slug: 'faq',
	labels: {
		singular: 'Ответ на частые вопросы',
		plural: 'Ответы на частые вопросы',
	},
	fields: [
		{
			name: 'faqs',
			label: 'Часто задаваемые вопросы',
			type: 'array',
			minRows: 1,
			fields: [
				{
					name: 'question',
					label: 'Вопрос',
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Вопрос (Рус)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Вопрос (En)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelKz',
							label: 'Вопрос (Қаз)',
							type: 'text',
							required: true,
						},
					],
				},
				{
					name: 'answer',
					label: 'Ответ',
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Ответ (Рус)',
							type: 'textarea',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Ответ (En)',
							type: 'textarea',
							required: true,
						},
						{
							name: 'labelKz',
							label: 'Ответ (Қаз)',
							type: 'textarea',
							required: true,
						},
					],
				},
			],
			required: true,
		},
	],
}
