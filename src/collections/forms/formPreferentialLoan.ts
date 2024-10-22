import { CollectionConfig } from 'payload/types'

const FormPreferentialLoan: CollectionConfig = {
	slug: 'form-for-preferential-loan',
	labels: {
		singular: 'Заполненная форма для льготного кредитования',
		plural: 'Заполненные формы для льготного кредитования',
	},
	access: {
		read: () => true,
		create: () => true,
		update: () => true,
		delete: () => true,
	},
	admin: {
		useAsTitle: 'Заполненные формы для льготного кредитования',
		group: 'Заполненные формы',
		defaultColumns: ['familyName', 'name', 'phone', 'iin', 'carBrand', 'carPrice', 'downPaymentInPercent', 'downPaymentPrice', 'creditSum', 'circulationCity'],
	},
	fields: [
		{
			name: 'familyName',
			label: 'Фамилия',
			type: 'text',
			required: true,
		},
        {
			name: 'name',
			label: 'Имя',
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
			name: 'carBrand',
			label: 'Марка авто',
			type: 'text',
			required: true,
		},
        {
			name: 'carPrice',
			label: 'Стоимость авто',
			type: 'text',
			required: true,
		},
        {
			name: 'downPaymentInPercent',
			label: 'Первоначальный взнос (в процентах)',
			type: 'text',
			required: true,
		},
        {
			name: 'downPaymentPrice',
			label: 'Сумма первоначального взноса',
			type: 'text',
			required: true,
		},
        {
			name: 'creditSum',
			label: 'Сумма кредита',
			type: 'text',
			required: true,
		},
        {
			name: 'city',
			label: 'Город обращения',
			type: 'text',
			required: true,
		},
		{
			name: 'utms',
			label: 'Метки (UTM)',
			type: 'group',
			fields: [
				{
					name: 'utm_source',
					label: 'UTM Source',
					type: 'text',
				},
				{
					name: 'utm_medium',
					label: 'UTM Medium',
					type: 'text',
				},
				{
					name: 'utm_campaign',
					label: 'UTM Campaign',
					type: 'text',
				},
				{
					name: 'utm_content',
					label: 'UTM Content',
					type: 'text',
				},
				{
					name: 'utm_term',
					label: 'UTM Term',
					type: 'text',
				},
			],
		},
	],

}

export default FormPreferentialLoan
