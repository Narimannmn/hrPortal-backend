import { colorPickerField } from '@innovixx/payload-color-picker-field'
import { Block } from 'payload/types'

export const Hero: Block = {
	slug: 'hero',
	labels: {
		singular: 'Баннер для страницы',
		plural: 'Баннеры для страницы',
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
		colorPickerField({
			name: 'backgroundColor',
			label: 'Цвет фона',
			required: true,
			admin: {
				position: 'sidebar',
				description: 'Выберите цвет фона',
			},
		}),
		colorPickerField({
			name: 'secondaryColor',
			label: 'Второй цвет для градиента',
			required: false,
			admin: {
				position: 'sidebar',
				description: 'Выберите второй цвет для градиента, если требуется',
			},
		}),
		{
			name: 'bgType',
			label: 'Тип фонового изображения',
			type: 'select',
			options: [
				{
					label: 'Центр',
					value: 'center',
				},
				{
					label: 'Низ',
					value: 'bottom',
				},
				{
					label: 'По всем углам',
					value: 'contain',
				},
			],
			required: true,
		},
		{
			name: 'right',
			label: 'Смещение справа',
			type: 'number',
			required: false,
		},
		{
			name: 'backgroundSize',
			label: 'Отступ по периметру',
			type: 'number',
			required: false,
		},
		{
			name: 'buttons',
			label: 'Кнопки',
			type: 'array',
			fields: [
				{
					name: 'label',
					label: 'Надпись кнопки',
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Надпись (Рус)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Надпись (En)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelKz',
							label: 'Надпись (Қаз)',
							type: 'text',
							required: true,
						},
					],
				},
				{
					name: 'variant',
					label: 'Тип кнопки',
					type: 'select',
					options: [
						{
							label: 'Розовый задний фон с белой надписью',
							value: 'primary',
						},
						{
							label: 'Белый задний фон с черной надписью',
							value: 'secondary',
						},
						{
							label: 'Прозрачный задний фон с розовой надписью',
							value: 'tertiary',
						},
						{
							label: 'Прозрачный задний фон с серой надписью',
							value: 'ghost',
						},
					],
					required: true,
				},
			],
		},
	],
}
