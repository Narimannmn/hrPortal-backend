import { Block } from 'payload/types'

export const Questions: Block = {
	slug: 'Questions',
	labels: {
		singular: 'Вопрос - ответ',
		plural: 'Вопросы - ответы',
	},
	fields: [
		{
			name: 'title',
			label: 'Заголовок',
			type: 'group',
			fields: [
				{
					name: 'labelKz',
					label: 'Казахский',
					type: 'text',
				},
				{
					name: 'labelRu',
					label: 'Русский',
					type: 'text',
				},
				{
					name: 'labelEn',
					label: 'Английский',
					type: 'text',
				},
			],
		},
		{
			name: 'questionList',
			label: 'Список вопросов',
			type: 'array',
			fields: [
				{
					name: 'question',
					label: 'Вопрос',
					type: 'group',
					fields: [
						{
							name: 'labelKz',
							label: 'Казахский',
							type: 'text',
						},
						{
							name: 'labelRu',
							label: 'Русский',
							type: 'text',
						},
						{
							name: 'labelEn',
							label: 'Английский',
							type: 'text',
						},
					],
				},
				{
					name: 'answer',
					label: 'Ответ',
					type: 'group',
					fields: [
						{
							name: 'labelKz',
							label: 'Казахский',
							type: 'textarea',
						},
						{
							name: 'labelRu',
							label: 'Русский',
							type: 'textarea',
						},
						{
							name: 'labelEn',
							label: 'Английский',
							type: 'textarea',
						},
					],
				},
			],
		},
	],
}
