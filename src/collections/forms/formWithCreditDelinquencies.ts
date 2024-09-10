import { CollectionConfig } from 'payload/types'

const FormWithCreditDelinquencies: CollectionConfig = {
	slug: 'form-with-credit-delinquencies',
	labels: {
		singular: 'Заполненная форма с уточнением кредитных просрочек',
		plural: 'Заполненные формы с уточнением кредитных просрочек',
	},
	access: {
		read: () => true,
		create: () => true,
		update: () => true,
		delete: () => true,
	},
	admin: {
		useAsTitle: 'Заполненные формы с уточнением кредитных просрочек',
		group: 'Заполненные формы',
		defaultColumns: [
			'selectedCard',
			'fullName',
			'phone',
			'iin',
			'selectedOpt',
			'salary',
			'totalPayments',
		],
	},
	fields: [
		{
			name: 'selectedCard',
			label: 'Время для перезвона',
			type: 'text',
			required: true,
		},
		{
			name: 'fullName',
			label: 'Имя и Фамилия',
			type: 'text',
			required: true,
		},
		{
			name: 'phone',
			label: 'Мобильный телефон',
			type: 'text',
			required: true,
		},
		{
			name: 'iin',
			label: 'ИИН',
			type: 'text',
			required: true,
		},
		{
			name: 'selectedOpt',
			label: 'Имеются текущие просрочки по кредитам',
			type: 'text',
			required: true,
		},
		{
			name: 'salary',
			label: 'Официальный уровень заработной платы ₸',
			type: 'text',
			required: true,
		},
		{
			name: 'totalPayments',
			label: 'Общая сумма платежей по текущим кредитам ₸',
			type: 'text',
			required: true,
		},
	],
}

export default FormWithCreditDelinquencies
