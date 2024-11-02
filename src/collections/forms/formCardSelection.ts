import { CollectionConfig } from 'payload/types'

const FormCardSelection: CollectionConfig = {
	slug: 'form-card-selection',
	labels: {
		singular: 'Заполненная форма с выбором вида карты',
		plural: 'Заполненные формы с выбором вида карты',
	},
	access: {
		read: () => true,
		create: () => true,
		update: () => true,
		delete: () => true,
	},
	admin: {
		useAsTitle: 'Заполненные формы с выбором вида карты',
		group: 'Заполненные формы',
		defaultColumns: ['city', 'selectedCard', 'iin', 'phone', 'comments'],
	},
	fields: [
		{
			name: 'city',
			label: 'Город',
			type: 'text',
			required: true,
		},
		{
			name: 'selectedCard',
			label: 'Выбранная карта',
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
			name: 'comments',
			label: 'Комментарии к заявке',
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

export default FormCardSelection
