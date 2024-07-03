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
			type: 'text',
			required: true,
		},
		{
			name: 'subtitle',
			label: 'Подзаголовок',
			type: 'text',
			required: false,
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
			label: 'Цвет фона (hex код)',
			type: 'text',
			required: true,
		},
		{
			name: 'width',
			label: 'Ширина',
			type: 'number',
			required: true,
		},
		{
			name: 'height',
			label: 'Высота',
			type: 'number',
			required: true,
		},
		{
			name: 'marginRight',
			label: 'Правый отступ',
			type: 'select',
			options: [
				{
					label: '0',
					value: '0',
				},
				{
					label: 'Auto',
					value: 'auto',
				},
			],
			required: true,
		},
		{
			name: 'marginLeft',
			label: 'Левый отступ',
			type: 'select',
			options: [
				{
					label: '0',
					value: '0',
				},
				{
					label: 'Auto',
					value: 'auto',
				},
			],
			required: true,
		},
		{
			name: 'marginTop',
			label: 'Верхний отступ',
			type: 'select',
			options: [
				{
					label: '0',
					value: '0',
				},
				{
					label: 'Auto',
					value: 'auto',
				},
			],
			required: true,
		},
		{
			name: 'marginBottom',
			label: 'Нижний отступ',
			type: 'select',
			options: [
				{
					label: '0',
					value: '0',
				},
				{
					label: 'Auto',
					value: 'auto',
				},
			],
			required: true,
		},
	],
}
