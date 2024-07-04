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
			label: 'Ширина фонового изображения',
			type: 'number',
			required: true,
		},
		{
			name: 'height',
			label: 'Высота фонового изображения',
			type: 'number',
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
