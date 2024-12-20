import { Block } from 'payload/types'

const PrivateSlider: Block = {
	slug: 'PrivateSlider',
	labels: {
		singular: 'Слайдер с Карточками для Приватной странички',
		plural: 'Слайдер с Карточками для Приватной странички',
	},
	fields: [
		{
			name: 'list',
			label: 'Список Слайдов',
			type: 'array',
			fields: [
				{
					name: 'title',
					label: 'Заголовок',
					type: 'group',
					fields: [
						{
							name: 'labelKz',
							label: 'Заголовок (Kz)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelRu',
							label: 'Заголовок (Ru)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Заголовок (En)',
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
							name: 'labelKz',
							label: 'Подзаголовок (Kz)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelRu',
							label: 'Подзаголовок (Ru)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Подзаголовок (En)',
							type: 'text',
							required: true,
						},
					],
				},
				{
					name: 'buttonText',
					label: 'Текст кнопки',
					type: 'group',
					fields: [
						{
							name: 'labelKz',
							label: 'Текст кнопки (Kz)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelRu',
							label: 'Текст кнопки (Ru)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Текст кнопки (En)',
							type: 'text',
							required: true,
						},
					],
				},
				{
					name: 'linkType',
					label: 'Тип ссылки',
					type: 'select',
					options: [
						{
							label: 'Страница',
							value: 'page',
						},
						{
							label: 'Произвольная ссылка',
							value: 'custom',
						},
					],
					required: true,
				},
				{
					name: 'pageSlug',
					label: 'Ссылка на страницу',
					type: 'relationship',
					relationTo: 'pages',
					admin: {
						condition: (_, siblingData) => siblingData.linkType === 'page',
					},
				},
				{
					name: 'customLink',
					label: 'Произвольная ссылка',
					type: 'text',
					admin: {
						condition: (_, siblingData) => siblingData.linkType === 'custom',
					},
				},
				{
					name: 'imageUrl',
					label: 'Ссылка на изображение',
					type: 'upload',
					relationTo: 'media',
					required: true,
				},
				{
					name: 'backgroundPosition',
					label: 'Расположение размытого заднего фона',
					type: 'radio',
					required: false,
					defaultValue: "center",
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
						}
					]
				},
			],
		},
	],
}

export default PrivateSlider
