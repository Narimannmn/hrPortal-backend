import { Block } from 'payload/types'

export const Hero: Block = {
	slug: 'hero',
	labels: {
		singular: 'Hero Block',
		plural: 'Hero Blocks',
	},
	fields: [
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
				},
				{
					name: 'labelEn',
					label: 'Подзаголовок (En)',
					type: 'text',
				},
				{
					name: 'labelKz',
					label: 'Подзаголовок (Қаз)',
					type: 'text',
				},
			],
		},
		{
			name: 'heroImage',
			label: 'Фоновое изображение',
			type: 'upload',
			relationTo: 'media',
			required: true,
		},
		{
			name: 'backgroundColor',
			label: 'Цвет фона',
			type: 'select',
			options: [
				{
					label: 'Ярко-голубой',
					value: 'light-gray',
				},
				{
					label: 'Голубой',
					value: 'blue-background',
				},
				{
					label: 'Серый',
					value: 'gray',
				},
				{
					label: 'Градиент (голубой - ярко-голубой)',
					value: 'gradient-blue',
				},
			],
			required: true,
		},
		{
			name: 'justifyContent',
			label: 'Выравнивание по вертикали',
			type: 'select',
			options: [
				{
					label: 'Влево',
					value: 'left',
				},
				{
					label: 'Вправо',
					value: 'right',
				},
				{
					label: 'По центру',
					value: 'center',
				},
			],
			required: true,
		},
	],
}
