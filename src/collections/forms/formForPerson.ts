import { CollectionConfig } from 'payload/types'

const FormForPerson: CollectionConfig = {
	slug: 'form-for-person',
	labels: {
		singular: 'Заполненная форма для физического лица',
		plural: 'Заполненные формы для физического лица',
	},
	access: {
		read: () => true,
		create: () => true,
		update: () => true,
		delete: () => true,
	},
	admin: {
		useAsTitle: 'Заполненные формы для физического лица',
		group: 'Заполненные формы',
		defaultColumns: ['fullName', 'phone', 'iin'],
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
			name: 'iin',
			label: 'ИИН',
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

export default FormForPerson
