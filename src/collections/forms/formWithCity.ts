import { CollectionConfig } from 'payload/types'

const FormWithCity: CollectionConfig = {
	slug: 'form-with-city',
	labels: {
		singular: 'Заполненная форма с выбором города',
		plural: 'Заполненные формы с выбором города',
	},
	access: {
		read: () => true,
		create: () => true,
		update: () => true,
		delete: () => true,
	},
	admin: {
		useAsTitle: 'Заполненные формы с выбором города',
		group: 'Заполненные формы',
		defaultColumns: ['companyName', 'bin', 'phone', 'fullName', 'city'],
	},
	fields: [
		{
			name: 'companyName',
			label: 'Наименование компании',
			type: 'text',
			required: true,
		},
		{
			name: 'bin',
			label: 'БИН',
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
			name: 'fullName',
			label: 'Имя и Фамилия',
			type: 'text',
			required: true,
		},
		{
			name: 'city',
			label: 'Город',
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

export default FormWithCity
