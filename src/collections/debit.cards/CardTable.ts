import { CollectionConfig } from 'payload/types'

const CompareCards: CollectionConfig = {
	slug: 'compare-cards',
	labels: {
		singular: 'Таблица сравнения карт',
		plural: 'Таблицы сравнения карт',
	},
	admin: {
		useAsTitle: 'title.labelRu',
		group: 'Сравнение карт',
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'title',
			label: 'Заголовок таблицы',
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
			name: 'horizontalTH',
			label: 'Горизонтальные заголовки',
			type: 'array',
			minRows: 1,
			fields: [
				{
					name: 'image',
					label: 'Изображение карты',
					type: 'upload',
					relationTo: 'media',
					required: true,
				},
				{
					name: 'cardName',
					label: 'Название карты',
					type: 'group',
					fields: [
						{
							name: 'labelKz',
							label: 'Название (Казахский)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelRu',
							label: 'Название (Русский)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Название (Английский)',
							type: 'text',
							required: true,
						},
					],
				},
				{
					name: 'description',
					label: 'Описание карты',
					type: 'group',
					fields: [
						{
							name: 'labelKz',
							label: 'Описание (Казахский)',
							type: 'textarea',
							required: false,
						},
						{
							name: 'labelRu',
							label: 'Описание (Русский)',
							type: 'textarea',
							required: false,
						},
						{
							name: 'labelEn',
							label: 'Описание (Английский)',
							type: 'textarea',
							required: false,
						},
					],
				},
			],
		},
		{
			name: 'sections',
			label: 'Секции сравнения',
			type: 'array',
			minRows: 1,
			fields: [
				{
					name: 'sectionTitle',
					label: 'Название секции',
					type: 'group',
					fields: [
						{
							name: 'labelKz',
							label: 'Название секции (Казахский)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelRu',
							label: 'Название секции (Русский)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Название секции (Английский)',
							type: 'text',
							required: true,
						},
					],
				},
				{
					name: 'rows',
					label: 'Строки секции',
					type: 'array',
					minRows: 1,
					fields: [
						{
							name: 'label',
							label: 'Название строки',
							type: 'group',
							fields: [
								{
									name: 'labelKz',
									label: 'Название строки (Казахский)',
									type: 'text',
									required: true,
								},
								{
									name: 'labelRu',
									label: 'Название строки (Русский)',
									type: 'text',
									required: true,
								},
								{
									name: 'labelEn',
									label: 'Название строки (Английский)',
									type: 'text',
									required: true,
								},
							],
						},
						{
							name: 'tooltip',
							label: 'Подсказка',
							type: 'group',
							fields: [
								{
									name: 'labelKz',
									label: 'Подсказка (Казахский)',
									type: 'text',
									required: false,
								},
								{
									name: 'labelRu',
									label: 'Подсказка (Русский)',
									type: 'text',
									required: false,
								},
								{
									name: 'labelEn',
									label: 'Подсказка (Английский)',
									type: 'text',
									required: false,
								},
							],
						},
						{
							name: 'values',
							label: 'Значения',
							type: 'array',
							minRows: 1,
							fields: [
								{
									name: 'label',
									label: 'Значение',
									type: 'group',
									fields: [
										{
											name: 'labelKz',
											label: 'Значение (Казахский)',
											type: 'text',
											required: false,
										},
										{
											name: 'labelRu',
											label: 'Значение (Русский)',
											type: 'text',
											required: false,
										},
										{
											name: 'labelEn',
											label: 'Значение (Английский)',
											type: 'text',
											required: false,
										},
									],
								},
							],
						},
					],
				},
			],
		},
	],
}

export default CompareCards
