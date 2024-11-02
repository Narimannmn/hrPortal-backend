import { CollectionConfig } from 'payload/types'

const FormWithAdditionalInfo: CollectionConfig = {
	slug: 'form-with-additional-info',
	labels: {
		singular: 'Заполненная форма с дополнительной информацией',
		plural: 'Заполненные формы с дополнительной информацией',
	},
	access: {
		read: () => true,
		create: () => true,
		update: () => true,
		delete: () => true,
	},
	admin: {
		useAsTitle: 'Заполненные формы с дополнительной информацией',
		group: 'Заполненные формы',
		defaultColumns: [
			'companyName',
			'bin',
			'phone',
			'fullName',
			'email',
			'other',
		],
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
			name: 'email',
			label: 'Электронная почта',
			type: 'text',
			required: true,
		},
		{
			name: 'other',
			label: 'Прочее',
			type: 'text',
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

export default FormWithAdditionalInfo
