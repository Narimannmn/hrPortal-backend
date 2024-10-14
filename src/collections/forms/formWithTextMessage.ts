import { CollectionConfig } from 'payload/types'

const FormWithTextMessage: CollectionConfig = {
	slug: 'form-with-text-message',
	labels: {
		singular: 'Заполненная форма с текстовым сообщением',
		plural: 'Заполненные формы с текстовым сообщением',
	},
	access: {
		read: () => true,
		create: () => true,
		update: () => true,
		delete: () => true,
	},
	admin: {
		useAsTitle: 'Заполненные формы с текстовым сообщением',
		group: 'Заполненные формы',
		defaultColumns: [
			'fullName',
			'iin',
			'phone',
			'email',
			'city',
			'postalAddress',
		],
	},
	fields: [
		{
			name: 'fullName',
			label: 'Имя и Фамилия',
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
			name: 'phone',
			label: 'Мобильный телефон',
			type: 'text',
			required: true,
		},
		{
			name: 'email',
			label: 'Электронная почта',
			type: 'email',
			required: true,
		},
		{
			name: 'messageText',
			label: 'Текст сообщения',
			type: 'textarea',
			required: true,
		},
		{
			name: 'city',
			label: 'Город',
			type: 'text',
			required: true,
		},
		{
			name: 'postalAddress',
			label: 'Почтовый адрес',
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

export default FormWithTextMessage
