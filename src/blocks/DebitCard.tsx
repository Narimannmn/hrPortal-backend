import { Block } from 'payload/types'

export const debitCards: Block = {
	slug: 'debitCards',
	labels: {
		singular: 'Debit Card',
		plural: 'Debit Cards',
	},
	fields: [
		{
			name: 'cards',
			label: 'Карты',
			type: 'array',
			required: true,
			fields: [
				{
					name: 'category',
					label: 'Категория',
					type: 'relationship',
					relationTo: 'debit-card-categories',
					required: true,
				},
				{
					name: 'image',
					label: 'Изображение',
					type: 'upload',
					relationTo: 'media',
					required: true,
				},
				{
					name: 'title',
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
					name: 'subtitle',
					label: 'Подзаголовок',
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Подзаголовок (Рус)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Подзаголовок (En)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelKz',
							label: 'Подзаголовок (Қаз)',
							type: 'text',
							required: true,
						},
					],
				},
				{
					name: 'info',
					label: 'Информация',
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
							name: 'subtitle',
							label: 'Подзаголовок',
							type: 'group',
							fields: [
								{
									name: 'labelRu',
									label: 'Подзаголовок (Рус)',
									type: 'text',
									required: true,
								},
								{
									name: 'labelEn',
									label: 'Подзаголовок (En)',
									type: 'text',
									required: true,
								},
								{
									name: 'labelKz',
									label: 'Подзаголовок (Қаз)',
									type: 'text',
									required: true,
								},
							],
						},
					],
				},
				{
					name: 'link',
					label: 'Ссылка',
					type: 'text',
					required: true,
				},
			],
		},
	],
}
