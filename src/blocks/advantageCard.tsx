import { Block } from 'payload/types'

export const advantageCard: Block = {
	slug: 'advantageCard',
	labels: {
		singular: 'Блок карточки преимуществ',
		plural: 'Блок карточек преимуществ',
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
			name: 'advantages',
			label: 'Преимущества',
			type: 'array',
			minRows: 3,
			maxRows: 5,
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
					name: 'description',
					label: 'Описание',
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Описание (Рус)',
							type: 'text',
						},
						{
							name: 'labelEn',
							label: 'Описание (En)',
							type: 'text',
						},
						{
							name: 'labelKz',
							label: 'Описание (Қаз)',
							type: 'text',
						},
					],
				},
				{
					name: 'alignImage',
					label: 'Выравнивание изображения',
					type: 'select',
					options: [
						{
							label: 'Слева',
							value: 'flex-start',
						},
						{
							label: 'Справа',
							value: 'flex-end',
						},
						{
							label: 'По центру',
							value: 'center',
						},
					],
					required: true,
				},
				{
					name: 'textAlign',
					label: 'Выравнивание текста',
					type: 'select',
					options: [
						{
							label: 'Слева',
							value: 'left',
						},
						{
							label: 'По центру',
							value: 'center',
						},
						{
							label: 'Справа',
							value: 'right',
						},
					],
					required: true,
				},
				{
					name: 'buttonText',
					label: 'Текст кнопки',
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Текст кнопки (Рус)',
							type: 'text',
						},
						{
							name: 'labelEn',
							label: 'Текст кнопки (En)',
							type: 'text',
						},
						{
							name: 'labelKz',
							label: 'Текст кнопки (Қаз)',
							type: 'text',
						},
					],
				},
			],
			required: true,
		},
	],
}
