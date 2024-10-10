import { CollectionConfig } from 'payload/types'

const FormForSms: CollectionConfig = {
	slug: 'form-for-sms',
	labels: {
		singular: 'Заполненная форма для отправки смс',
		plural: 'Заполненные формы для отправок смс',
	},
	access: {
		read: () => true,
		create: () => true,
		update: () => true,
		delete: () => true,
	},
	admin: {
		useAsTitle: 'Заполненные формы для отправки смс',
		group: 'Заполненные формы',
		defaultColumns: ['phone'],
	},
	fields: [
		{
			name: 'phone',
			label: 'Мобильный телефон',
			type: 'text',
			required: true,
		},
	],
}

export default FormForSms
