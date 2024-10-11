import { CollectionConfig } from 'payload/types'

const DebitTariff: CollectionConfig = {
	slug: 'debit_tariffs',
	labels: {
		singular: 'Тариф - дебетовые карты',
		plural: 'Тарифы - дебетовые карты',
	},
	admin: {
		useAsTitle: 'Тарифы - дебетовые карты',
		group: 'Дебетовые карты',
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'tariff_section',
			label: 'Добавить секцию',
			type: 'group',
			fields: [
				{
					name: 'card',
					label: 'Выбрать карту',
					type: 'relationship',
					relationTo: 'debit-cards',
					required: true,
				},
				{
					name: 'price',
					label: 'Цена в текстовом формате',
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Цена (Рус)',
							type: 'text',
						},
						{
							name: 'labelEn',
							label: 'Цена (En)',
							type: 'text',
						},
						{
							name: 'labelKz',
							label: 'Цена (Қаз)',
							type: 'text',
						},
					],
				},
				{
					name: 'info',
					label: 'Информация',
					type: 'array',
					fields: [
						{
							name: 'label',
							label: 'Выбрать раздел',
							type: 'relationship',
							relationTo: 'tariff-categories-debit-cards',
						},
						{
							name: 'sub_labels',
							label: 'Подразделы',
							type: 'array',
							fields: [
								{
									name: 'sub_label',
									label: 'Выбрать подраздел',
									type: 'relationship',
									relationTo: 'tariff-categories-sub-cat',
									required: true,
								},
								{
									name: 'value',
									label: 'Значение',
									type: 'select',
									options: [
										{ label: 'Текст', value: 'und' },
										{ label: 'Да или Нет', value: 'bool' },
									],
									required: true,
								},
								{
									name: 'text',
									label: 'Текст',
									type: 'group',
									admin: {
										condition: (_, siblingData) => siblingData.value === 'und',
									},
									fields: [
										{
											name: 'labelRu',
											label: 'Текст (Рус)',
											type: 'text',
										},
										{
											name: 'labelEn',
											label: 'Текст (En)',
											type: 'text',
										},
										{
											name: 'labelKz',
											label: 'Текст (Қаз)',
											type: 'text',
										},
									],
								},
								{
									name: 'bool',
									label: 'Да или Нет',
									type: 'select',
									options: [
										{ label: 'Да', value: 'yes' },
										{ label: 'Нет', value: 'no' },
									],
									admin: {
										condition: (_, siblingData) => siblingData.value === 'bool',
									},
								},
							],
						},
					],
				},
			],
		},
	],
}

export default DebitTariff
