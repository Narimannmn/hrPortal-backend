import { CollectionConfig } from 'payload/types'

const FormForOrderingCall: CollectionConfig = {
	slug: 'form-for-ordering-call',
	labels: {
		singular: 'Заполненная форма для заказа звонка',
		plural: 'Заполненные формы для заказа звонка',
	},
	access: {
		read: () => true,
		create: () => true,
		update: () => true,
		delete: () => true,
	},
	admin: {
		useAsTitle: 'Заполненные формы для заказа звонка',
		group: 'Заполненные формы',
		defaultColumns: ['fullName', 'phone', 'city'],
	},
	fields: [
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
			name: 'city',
			label: 'Город',
			type: 'text',
			required: false,
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

export default FormForOrderingCall
