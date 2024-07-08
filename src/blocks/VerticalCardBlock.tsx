import { colorPickerField } from '@innovixx/payload-color-picker-field'
import { Block } from 'payload/types'

const VerticalCardBlock: Block = {
	slug: 'VerticalCardBlock',
	labels: {
		singular: 'Вертикальная карточка',
		plural: 'Вертикальные карточки',
	},
	fields: [
		{
			name: 'fillScreen',
			label: 'Заполнить экран',
			type: 'checkbox',
			required: false,
		},
		{
			name: 'cards',
			label: 'Карточки',
			type: 'array',
			minRows: 1,
			fields: [
				{
					name: 'size',
					label: 'Размер',
					type: 'select',
					options: [
						{
							label: 'Обычный',
							value: 'default',
						},
						{
							label: 'Большой',
							value: 'large',
						},
					],
					required: true,
				},
				{
					name: 'title',
					label: 'Заголовок',
					type: 'group',
					fields: [
						{
							name: 'kz',
							label: 'Заголовок (Казахский)',
							type: 'text',
							required: true,
						},
						{
							name: 'ru',
							label: 'Заголовок (Русский)',
							type: 'text',
							required: true,
						},
						{
							name: 'en',
							label: 'Заголовок (Английский)',
							type: 'text',
							required: true,
						},
					],
				},
				{
					name: 'subtitleType',
					label: 'Тип подзаголовка',
					type: 'select',
					options: [
						{
							label: 'Список',
							value: 'list',
						},
						{
							label: 'Текст',
							value: 'txt',
						},
					],
					required: true,
				},
				{
					name: 'subtitleTxt',
					label: 'Подзаголовок (Текст)',
					type: 'group',
					admin: {
						condition: (_, siblingData) => siblingData.subtitleType === 'txt',
					},
					fields: [
						{
							name: 'kz',
							label: 'Подзаголовок (Казахский)',
							type: 'text',
							required: true,
						},
						{
							name: 'ru',
							label: 'Подзаголовок (Русский)',
							type: 'text',
							required: true,
						},
						{
							name: 'en',
							label: 'Подзаголовок (Английский)',
							type: 'text',
							required: true,
						},
					],
				},
				{
					name: 'subtitleList',
					label: 'Подзаголовок (Список)',
					type: 'array',
					admin: {
						condition: (_, siblingData) => siblingData.subtitleType === 'list',
					},
					fields: [
						{
							name: 'kz',
							label: 'Элемент списка (Казахский)',
							type: 'text',
							required: true,
						},
						{
							name: 'ru',
							label: 'Элемент списка (Русский)',
							type: 'text',
							required: true,
						},
						{
							name: 'en',
							label: 'Элемент списка (Английский)',
							type: 'text',
							required: true,
						},
					],
				},
				colorPickerField({
					name: 'bgColor',
					label: 'Цвет фона',
					required: true,
					admin: {
						position: 'sidebar',
						description: 'Выберите цвет фона для карточки',
					},
				}),
				colorPickerField({
					name: 'txtColor',
					label: 'Цвет текста',
					required: false,
					admin: {
						position: 'sidebar',
						description: 'Выберите цвет текста для карточки',
					},
				}),
				{
					name: 'iconType',
					label: 'Тип иконки',
					type: 'select',
					options: [
						{
							label: 'С фоном',
							value: 'bg',
						},
						{
							label: 'Без фона',
							value: 'not-bg',
						},
					],
					required: false,
				},
				{
					name: 'img',
					label: 'Изображение',
					type: 'upload',
					relationTo: 'media',
					required: false,
				},
				{
					name: 'icn',
					label: 'Иконка',
					type: 'upload',
					relationTo: 'icons',
					required: false,
				},
				{
					name: 'footerType',
					label: 'Тип футера',
					type: 'select',
					options: [
						{
							label: 'Модальное окно',
							value: 'modal',
						},
						{
							label: 'Текстовая ссылка',
							value: 'txtLink',
						},
						{
							label: 'Текст',
							value: 'text',
						},
						{
							label: 'Кнопка-ссылка',
							value: 'btnLink',
						},
					],
					required: false,
				},
				{
					name: 'footerTxt',
					label: 'Текст футера',
					type: 'group',
					admin: {
						condition: (_, siblingData) => siblingData.footerType === 'text',
					},
					fields: [
						{
							name: 'kz',
							label: 'Текст (Казахский)',
							type: 'text',
							required: true,
						},
						{
							name: 'ru',
							label: 'Текст (Русский)',
							type: 'text',
							required: true,
						},
						{
							name: 'en',
							label: 'Текст (Английский)',
							type: 'text',
							required: true,
						},
					],
				},
				{
					name: 'footerLnk',
					label: 'Ссылка футера',
					type: 'group',
					admin: {
						condition: (_, siblingData) =>
							siblingData.footerType === 'txtLink' ||
							siblingData.footerType === 'btnLink',
					},
					fields: [
						{
							name: 'lnkType',
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
							required: false,
						},
						{
							name: 'customLnk',
							label: 'Произвольная ссылка',
							type: 'text',
							admin: {
								condition: (_, siblingData) => siblingData.lnkType === 'custom',
							},
						},
						{
							name: 'pageSlug',
							label: 'Ссылка на страницу',
							type: 'relationship',
							relationTo: 'pages',
							admin: {
								condition: (_, siblingData) => siblingData.lnkType === 'page',
							},
						},
					],
				},
				{
					name: 'footerModal',
					label: 'Модальное окно футера',
					type: 'group',
					admin: {
						condition: (_, siblingData) => siblingData.footerType === 'modal',
					},
					fields: [
						{
							name: 'title',
							label: 'Заголовок',
							type: 'group',
							fields: [
								{
									name: 'kz',
									label: 'Заголовок (Казахский)',
									type: 'text',
									required: true,
								},
								{
									name: 'ru',
									label: 'Заголовок (Русский)',
									type: 'text',
									required: true,
								},
								{
									name: 'en',
									label: 'Заголовок (Английский)',
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
									name: 'kz',
									label: 'Подзаголовок (Казахский)',
									type: 'text',
									required: true,
								},
								{
									name: 'ru',
									label: 'Подзаголовок (Русский)',
									type: 'text',
									required: true,
								},
								{
									name: 'en',
									label: 'Подзаголовок (Английский)',
									type: 'text',
									required: true,
								},
							],
						},
						{
							name: 'richTxt',
							label: 'Текст',
							type: 'richText',
							required: true,
						},
					],
				},
				{
					name: 'imgOffsets',
					label: 'Отступы изображения',
					type: 'group',
					fields: [
						{
							name: 'bottom',
							label: 'Отступ снизу',
							type: 'text',
							required: false,
						},
						{
							name: 'right',
							label: 'Отступ справа',
							type: 'text',
							required: false,
						},
						{
							name: 'width',
							label: 'Ширина',
							type: 'text',
							required: false,
						},
						{
							name: 'height',
							label: 'Высота',
							type: 'text',
							required: false,
						},
					],
				},
			],
		},
	],
}

export default VerticalCardBlock
