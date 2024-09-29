import { CollectionConfig } from 'payload/types'

export const QuestionsSection: CollectionConfig = {
	slug: 'question-section',
	labels: {
		singular: 'Раздел для вопросов',
		plural: 'Разделы для вопросов',
	},
	admin: {
		useAsTitle: 'labelRu',
	},
	fields: [
		{
			name: 'labelEn',
			label: 'Название раздела (Английский)',
			type: 'text',
			required: true,
		},
		{
			name: 'labelRu',
			label: 'Название раздела (Русский)',
			type: 'text',
			required: true,
		},
		{
			name: 'labelKz',
			label: 'Название раздела (Казахский)',
			type: 'text',
			required: true,
		},
	],
}
