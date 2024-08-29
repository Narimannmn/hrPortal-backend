import { Block } from 'payload/types'

const ServicePrivilege: Block = {
	slug: 'ServicePrivilege',
	labels: {
		singular: 'Привилегии обслуживания',
		plural: 'Привилегии обслуживания ',
	},
	fields: [
		{
			name: 'cards',
			label: 'Карточки',
			type: 'array',
			fields: [
				{
					name: 'img',
					label: 'Изображение',
					type: 'upload',
					relationTo: 'media',
					required: true,
				},
				{
					name: 'title',
					label: 'Название',
					type: 'group',
					fields: [
						{
							name: 'labelRu',
							label: 'Название (Рус)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelEn',
							label: 'Название (En)',
							type: 'text',
							required: true,
						},
						{
							name: 'labelKz',
							label: 'Название (Қаз)',
							type: 'text',
							required: true,
						},
					],
				},
			],
		}
	],
}

export default ServicePrivilege
