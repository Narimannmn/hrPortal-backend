import { colorPickerField } from '@innovixx/payload-color-picker-field'
import { Block } from 'payload/types'

export type Labels = {
	labelKz: string
	labelRu: string
	labelEn: string
}

const ProductCardsBlock: Block = {
	slug: 'productCards',
	labels: {
		singular: 'Карточка продукта',
		plural: 'Карточки продуктов',
	},
	fields: [
		{
			name: 'cards',
			label: 'Карточки',
			type: 'array',
			minRows: 1,
			maxRows: 3,
			fields: [
				{
					name: 'title',
					label: 'Заголовок',
					type: 'group',
					fields: [
						{
							name: 'labelKz',
							label: 'Заголовок (Казахский)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelRu',
							label: 'Заголовок (Русский)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Заголовок (Английский)',
							type: 'text',
							required: true,
						},
					],
				},
				{
					name: 'subTitle',
					label: 'Подзаголовок',
					type: 'group',
					fields: [
						{
							name: 'labelKz',
							label: 'Подзаголовок (Казахский)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelRu',
							label: 'Подзаголовок (Русский)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Подзаголовок (Английский)',
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
							label: 'Текст кнопки (Казахский)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelRu',
							label: 'Текст кнопки (Русский)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Текст кнопки (Английский)',
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
							label: 'Произвольная ссылка',
							value: 'custom',
						},
						{
							label: 'Ссылка на страницу',
							value: 'page',
						},
					],
					required: true,
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
					name: 'pageSlug',
					label: 'Ссылка на страницу',
					type: 'relationship',
					relationTo: 'pages',
					admin: {
						condition: (_, siblingData) => siblingData.linkType === 'page',
					},
				},
				{
					name: 'image',
					label: 'Изображение',
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
						description: 'Выберите цвет фона для карточки продукта',
					},
				}),
				{
					name: 'imageOffsetBottom',
					label: 'Отступ снизу изображения',
					type: 'number',
					required: false,
				},
				{
					name: 'imageOffsetRight',
					label: 'Отступ справа изображения',
					type: 'number',
					required: false,
				},
			],
		},
	],
}

export default ProductCardsBlock
