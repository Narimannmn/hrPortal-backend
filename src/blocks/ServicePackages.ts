import { Block } from 'payload/types'

const ServicePackages: Block = {
	slug: 'ServicePackages',
	labels: {
		singular: 'Пакеты обслуживания',
		plural: 'Пакеты обслуживания',
	},
	fields: [
		{
			name: 'cards',
			label: 'Карточки',
			type: 'array',
			fields: [
				{
					name: 'img',
					label: 'Изображение',
					type: 'upload',
					relationTo: 'media',
					required: true,
				},
				{
					name: 'title',
					label: 'Название',
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Название (Рус)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Название (En)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelKz',
							label: 'Название (Қаз)',
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
							label: 'Значение (Рус)',
							type: 'richText',
						},
						{
							name: 'labelEn',
							label: 'Значение (En)',
							type: 'richText',
						},
						{
							name: 'labelKz',
							label: 'Значение (Қаз)',
							type: 'richText',
						},
					],
				},
				{
					name: 'buttonText',
					label: 'Текст кнопки "Подробнее"',
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
					name: 'details',
					label: 'Подробная информация',
					type: 'group',
					fields: [
						{
							name: 'includedItemsTitle',
							label: 'Заголовок включенных айтемов',
							type: 'group',
							fields: [
								{
									name: 'labelRu',
									label: 'Название (Рус)',
									type: 'text',
									required: true,
								},
								{
									name: 'labelEn',
									label: 'Название (En)',
									type: 'text',
									required: true,
								},
								{
									name: 'labelKz',
									label: 'Название (Қаз)',
									type: 'text',
									required: true,
								},
							],
						},
						{
							name: 'includedItems',
							label: 'Список включенных айтемов',
							type: 'group',
							fields: [
								{
									name: 'labelRu',
									label: 'Значение (Рус)',
									type: 'richText',
									required: true,
								},
								{
									name: 'labelEn',
									label: 'Значение (En)',
									type: 'richText',
									required: true,
								},
								{
									name: 'labelKz',
									label: 'Значение (Қаз)',
									type: 'richText',
									required: true,
								},
							]
						}
					]
				}
			],
		}
	],
}

export default ServicePackages
