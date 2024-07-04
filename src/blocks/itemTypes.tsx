import { Block } from 'payload/types'

export const ItemTypes: Block = {
	slug: 'itemTypes',
	labels: {
		singular: 'Item Type',
		plural: 'Item Types',
	},
	fields: [
		{
			name: 'items',
			label: 'Items',
			type: 'array',
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
					type: 'text',
					required: true,
				},
				{
					name: 'description',
					label: 'Описание',
					type: 'textarea',
					required: true,
				},
				{
					name: 'characteristics',
					label: 'Характеристики',
					type: 'array',
					fields: [
						{
							name: 'label',
							label: 'Наименование характеристики',
							type: 'text',
							required: true,
						},
						{
							name: 'value',
							label: 'Значение характеристики',
							type: 'text',
							required: true,
						},
					],
					required: true,
				},
				{
					name: 'buttons',
					label: 'Кнопки',
					type: 'array',
					fields: [
						{
							name: 'label',
							label: 'Текст кнопки',
							type: 'text',
							required: true,
						},
						{
							name: 'backgroundColor',
							label: 'Цвет фона кнопки',
							type: 'text',
							required: true,
						},
						{
							name: 'color',
							label: 'Цвет текста кнопки',
							type: 'text',
							required: true,
						},
						{
							name: 'borderRadius',
							label: 'Радиус границы кнопки',
							type: 'number',
							required: true,
						},
					],
				},
			],
		},
	],
}
