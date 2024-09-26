import { CollectionConfig } from 'payload/types'

export const Questions: CollectionConfig = {
	slug: 'Questions',
	labels: {
		singular: 'Вопрос - ответ',
		plural: 'Вопросы - ответы',
	},
	fields: [
		{
			name: 'section',
			label: 'Раздел вопросов',
			type: 'relationship',
			relationTo: 'question-section',
			required: true,
		},
		{
			name: 'title',
			label: 'Заголовок раздела',
			type: 'group',
			fields: [
				{
					name: 'labelKz',
					label: 'Казахский',
					type: 'text',
					required: true,
				},
				{
					name: 'labelRu',
					label: 'Русский',
					type: 'text',
					required: true,
				},
				{
					name: 'labelEn',
					label: 'Английский',
					type: 'text',
					required: true,
				},
			],
		},
		{
			name: 'questionList',
			label: 'Список вопросов',
			type: 'array',
			minRows: 1,
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
							required: true,
						},
						{
							name: 'labelRu',
							label: 'Русский',
							type: 'text',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Английский',
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
							name: 'labelKz',
							label: 'Казахский',
							type: 'textarea',
							required: true,
						},
						{
							name: 'labelRu',
							label: 'Русский',
							type: 'textarea',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Английский',
							type: 'textarea',
							required: true,
						},
					],
				},
			],
		},
	],
}
