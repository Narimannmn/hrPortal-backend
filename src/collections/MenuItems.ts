import { CollectionConfig } from 'payload/types'

const MenuItems: CollectionConfig = {
	slug: 'menu-items',
	labels: {
		singular: 'Пункт меню',
		plural: 'Пункты меню',
	},
	access: {
		read: () => true, // Public read access
	},
	fields: [
		{
			name: 'labelKz',
			label: 'Название пункта меню (Kz)',
			type: 'text',
			required: true,
		},
		{
			name: 'labelRu',
			label: 'Название пункта меню (Ru)',
			type: 'text',
			required: true,
		},
		{
			name: 'labelEn',
			label: 'Название пункта меню (En)',
			type: 'text',
			required: true,
		},
		{
			name: 'linkType',
			label: 'Тип ссылки',
			type: 'select',
			options: [
				{
					label: 'Страница',
					value: 'page',
				},
				{
					label: 'Произвольная ссылка',
					value: 'custom',
				},
			],
			required: true,
		},
		{
			name: 'page',
			label: 'Страница',
			type: 'relationship',
			relationTo: 'pages',
			admin: {
				condition: data => data.linkType === 'page',
			},
		},
		{
			name: 'freeLink',
			label: 'Произвольная ссылка',
			type: 'text',
			admin: {
				condition: data => data.linkType === 'custom',
			},
		},
		{
			name: 'menuList',
			label: 'Список подменю',
			type: 'array',
			fields: [
				{
					name: 'labelKz',
					label: 'Название подменю (Kz)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelRu',
					label: 'Название подменю (Ru)',
					type: 'text',
					required: true,
				},
				{
					name: 'labelEn',
					label: 'Название подменю (En)',
					type: 'text',
					required: true,
				},
				{
					name: 'page',
					label: 'Страница',
					type: 'relationship',
					relationTo: 'pages',
				},
				{
					name: 'menuItems',
					label: 'Пункты подменю',
					type: 'group',
					fields: [
						{
							name: 'links',
							label: 'Список ссылок',
							type: 'array',
							fields: [
								{
									name: 'labelKz',
									label: 'Название ссылки (Kz)',
									type: 'text',
									required: true,
								},
								{
									name: 'labelRu',
									label: 'Название ссылки (Ru)',
									type: 'text',
									required: true,
								},
								{
									name: 'labelEn',
									label: 'Название ссылки (En)',
									type: 'text',
									required: true,
								},
								{
									name: 'linkType',
									label: 'Тип ссылки',
									type: 'select',
									options: [
										{
											label: 'Страница',
											value: 'page',
										},
										{
											label: 'Произвольная ссылка',
											value: 'custom',
										},
									],
									required: true,
								},
								{
									name: 'page',
									label: 'Страница',
									type: 'relationship',
									relationTo: 'pages',
									admin: {
										condition: (data, siblingData) =>
											siblingData.linkType === 'page',
									},
								},
								{
									name: 'customLink',
									label: 'Произвольная ссылка',
									type: 'text',
									admin: {
										condition: (data, siblingData) =>
											siblingData.linkType === 'custom',
									},
								},
							],
						},
						{
							name: 'addMenu',
							label: 'Дополнительное меню',
							type: 'group',
							fields: [
								{
									name: 'nameMenu',
									label: 'Название доп. меню',
									type: 'text',
								},
								{
									name: 'links',
									label: 'Ссылки доп. меню',
									type: 'array',
									fields: [
										{
											name: 'labelKz',
											label: 'Название ссылки (Kz)',
											type: 'text',
											required: true,
										},
										{
											name: 'labelRu',
											label: 'Название ссылки (Ru)',
											type: 'text',
											required: true,
										},
										{
											name: 'labelEn',
											label: 'Название ссылки (En)',
											type: 'text',
											required: true,
										},
										{
											name: 'linkType',
											label: 'Тип ссылки',
											type: 'select',
											options: [
												{
													label: 'Страница',
													value: 'page',
												},
												{
													label: 'Произвольная ссылка',
													value: 'custom',
												},
											],
											required: true,
										},
										{
											name: 'page',
											label: 'Страница',
											type: 'relationship',
											relationTo: 'pages',
											admin: {
												condition: (data, siblingData) =>
													siblingData.linkType === 'page',
											},
										},
										{
											name: 'customLink',
											label: 'Произвольная ссылка',
											type: 'text',
											admin: {
												condition: (data, siblingData) =>
													siblingData.linkType === 'custom',
											},
										},
									],
								},
							],
						},
					],
				},
			],
		},
	],
	hooks: {
		afterRead: [
			async ({ doc, req }) => {
				const updatePageSlug = async pageId => {
					if (!pageId) return null
					const page = await req.payload.findByID({
						collection: 'pages',
						id: pageId,
						depth: 0,
					})
					return page?.slug || null
				}

				const processLinks = async links => {
					if (!links) return
					for (const link of links) {
						if (link.page && typeof link.page === 'object' && link.page.id) {
							link.pageSlug = await updatePageSlug(link.page.id)
							link.page = link.page.id
						}
					}
				}

				const processMenuList = async menuList => {
					if (!menuList) return
					for (const submenu of menuList) {
						if (
							submenu.page &&
							typeof submenu.page === 'object' &&
							submenu.page.id
						) {
							submenu.pageSlug = await updatePageSlug(submenu.page.id)
							submenu.page = submenu.page.id
						}
						if (submenu.menuItems?.links) {
							await processLinks(submenu.menuItems.links)
						}
						if (submenu.menuItems?.addMenu?.links) {
							await processLinks(submenu.menuItems.addMenu.links)
						}
					}
				}

				if (doc.page && typeof doc.page === 'object' && doc.page.id) {
					doc.pageSlug = await updatePageSlug(doc.page.id)
					doc.page = doc.page.id
				}

				if (doc.menuList) {
					await processMenuList(doc.menuList)
				}

				return doc
			},
		],
	},
}

export default MenuItems
