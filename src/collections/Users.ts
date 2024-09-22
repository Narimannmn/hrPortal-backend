import { convertImagesToWebP } from '../convertToWebP'
import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
	slug: 'users',
	labels: {
		singular: 'Пользователь',
		plural: 'Пользователи',
	},
	hooks: {
		afterLogin: [
			async ({ user }) => {
				if (user.roles.includes('admin')) {
					console.log(
						'Администратор залогинен, начинаем конвертацию изображений...'
					)
					await convertImagesToWebP()
				}
			},
		],
	},
	auth: true,
	access: {
		create: ({ req: { user } }) => user.role === 'admin',
		read: ({ req: { user } }) => user.role === 'admin',
		update: ({ req: { user } }) => user.role === 'admin',
		delete: ({ req: { user } }) => user.role === 'admin',
	},
	admin: {
		useAsTitle: 'email',
		group: 'Пользователи',
	},
	fields: [
		{
			name: 'role',
			type: 'select',
			options: [
				{
					label: 'Админ',
					value: 'admin',
				},
				{
					label: 'Налоговое имущество',
					value: 'seller',
				},
			],
			required: true,
			defaultValue: 'seller',
		},
	],
}

export default Users
