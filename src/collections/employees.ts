import { CollectionConfig } from 'payload/types'

const Employees: CollectionConfig = {
	slug: 'employees',
	labels: {
		singular: 'Сотрудник',
		plural: 'Сотрудники',
	},
	access: {
		read: () => true,
	},
	admin: {
		group: 'Структура Банка',
	},
	fields: [
		{
			name: 'name',
			label: 'Имя',
			type: 'text',
			required: true,
		},
		{
			name: 'position',
			label: 'Должность',
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
			name: 'telephone',
			label: 'Телефон',
			type: 'text',
			required: true,
		},
		{
			name: 'image',
			label: 'Изображение',
			type: 'upload',
			relationTo: 'media',
			required: true,
		},
	],
}

export default Employees
