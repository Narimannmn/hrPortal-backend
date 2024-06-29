import { Block } from 'payload/types'

export const SliderHero: Block = {
	slug: 'sliderHero',
	labels: {
		singular: 'Слайдер блок',
		plural: 'Слайдер блоки',
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
			name: 'backgroundColor',
			label: 'hex code of color',
			type: 'text',
			required: true,
		},
		{
			name: 'sliderImage',
			label: 'Фоновое изображение',
			type: 'upload',
			relationTo: 'media',
			required: true,
		},
		{
			name: 'width',
			label: 'Ширина картинки',
			type: 'number',
			required: false,
		},
		{
			name: 'height',
			label: 'Высота картинки',
			type: 'number',
			required: false,
		},
		{
			name: 'top',
			label: 'Отступ сверху',
			type: 'number',
			required: false,
		},
		{
			name: 'bottom',
			label: 'Отступ снизу',
			type: 'number',
			required: false,
		},
	],
}
