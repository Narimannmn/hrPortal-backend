import { Block } from 'payload/types'

export const QuestionBlock: Block = {
	slug: 'QuestionsBlock',
	labels: {
		singular: 'Секция или блок - вопрос ответ',
		plural: 'Секция или блок - вопросы ответы',
	},
	fields: [
		{
			name: 'typeSection',
			label: 'Тип',
			type: 'select',
			required: true,
			options: [
				{ label: 'Секция', value: 'page' },
				{ label: 'Блок', value: 'block' },
			],
		},
	],
}
