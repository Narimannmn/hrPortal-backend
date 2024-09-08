import { CollectionConfig } from 'payload/types'

const Employees: CollectionConfig = {
	slug: 'employees',
	labels: {
		singular: 'Правление - другие',
		plural: 'Правление - другие',
	},
	access: {
		read: () => true,
	},
	admin: {
		group: 'О Банке',
	},
	fields: [
		{
			name: 'name',
			label: 'Имя',
			type: 'group',
			fields: [
				{
					name: 'labelKz',
					label: 'Имя (Kz)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelRu',
					label: 'Имя (Ru)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelEn',
					label: 'Имя (En)',
					type: 'text',
					required: true,
				},
			],
		},
		{
			name: 'position',
			label: 'Должность',
			type: 'group',
			fields: [
				{
					name: 'labelKz',
					label: 'Должность (Kz)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelRu',
					label: 'Должность (Ru)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelEn',
					label: 'Должность (En)',
					type: 'text',
					required: true,
				},
			],
		},
	],
}

export default Employees
