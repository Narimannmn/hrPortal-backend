import { Block } from 'payload/types'

export const form: Block = {
	slug: 'form',
	labels: {
		singular: 'Форма заполнения',
		plural: 'Формы заполнения',
	},
	fields: [
		{
			name: 'tabs',
			label: 'Вкладки',
			type: 'array',
			minRows: 1,
			maxRows: 5,
			required: true,
			fields: [
				{
					name: 'tabName',
					label: 'Название вкладки',
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Название вкладки (Рус)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Название вкладки (En)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelKz',
							label: 'Название вкладки (Қаз)',
							type: 'text',
							required: true,
						},
					],
				},
				{
					name: 'formVariant',
					label: 'Вариант формы',
					type: 'select',
					options: [
						{
							label: 'Форма для физического лица',
							value: 'formForPerson',
						},
						{
							label: 'Форма для отправки SMS',
							value: 'formSendSMS',
						},
						{
							label: 'Форма с дополнительной информацией',
							value: 'formWithAdditionalInfo',
						},
						{
							label: 'Форма с выбором города',
							value: 'formWithCity',
						},
						{
							label: 'Форма с текстовым сообщением',
							value: 'formWithTextMessage',
						},
						{
							label: 'Форма с выбором вида карты',
							value: 'formCardSelection',
						},
					],
					required: true,
				},
			],
		},
	],
}
