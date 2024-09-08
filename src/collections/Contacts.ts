import { CollectionConfig } from 'payload/types'

const Contacts: CollectionConfig = {
	slug: 'contacts',
	labels: {
		singular: 'Контакт',
		plural: 'Контакты',
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'private',
			label: 'Частные контакты',
			type: 'group',
			fields: [
				{
					name: 'labelRu',
					label: 'Название (Ru)',
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
					label: 'Название (Kz)',
					type: 'text',
					required: true,
				},
				{
					name: 'phone',
					label: 'Телефон',
					type: 'text',
					required: true,
				},
			],
		},
		{
			name: 'business',
			label: 'Бизнес-контакты',
			type: 'group',
			fields: [
				{
					name: 'labelRu',
					label: 'Название (Ru)',
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
					label: 'Название (Kz)',
					type: 'text',
					required: true,
				},
				{
					name: 'phone',
					label: 'Телефон',
					type: 'text',
					required: true,
				},
			],
		},
		{
			name: 'socialLinks',
			label: 'Социальные сети',
			type: 'group',
			fields: [
				{
					name: 'telegram',
					label: 'Telegram',
					type: 'group',
					fields: [
						{
							name: 'url',
							label: 'URL',
							type: 'text',
							required: true,
						},
						{
							name: 'icon',
							label: 'Иконка',
							type: 'upload',
							relationTo: 'icons',
							required: true,
						},
					],
				},
				{
					name: 'vk',
					label: 'VK',
					type: 'group',
					fields: [
						{
							name: 'url',
							label: 'URL',
							type: 'text',
							required: true,
						},
						{
							name: 'icon',
							label: 'Иконка',
							type: 'upload',
							relationTo: 'icons',
							required: true,
						},
					],
				},
				{
					name: 'facebook',
					label: 'Facebook',
					type: 'group',
					fields: [
						{
							name: 'url',
							label: 'URL',
							type: 'text',
							required: true,
						},
						{
							name: 'icon',
							label: 'Иконка',
							type: 'upload',
							relationTo: 'icons',
							required: true,
						},
					],
				},
				{
					name: 'youtube',
					label: 'YouTube',
					type: 'group',
					fields: [
						{
							name: 'url',
							label: 'URL',
							type: 'text',
							required: true,
						},
						{
							name: 'icon',
							label: 'Иконка',
							type: 'upload',
							relationTo: 'icons',
							required: true,
						},
					],
				},
				{
					name: 'whatsapp',
					label: 'WhatsApp',
					type: 'group',
					fields: [
						{
							name: 'url',
							label: 'URL',
							type: 'text',
							required: true,
						},
						{
							name: 'icon',
							label: 'Иконка',
							type: 'upload',
							relationTo: 'icons',
							required: true,
						},
					],
				},
			],
		},
	],
}

export default Contacts
