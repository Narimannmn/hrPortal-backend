import { CollectionConfig } from 'payload/types'

const MenuItems: CollectionConfig = {
	slug: 'menu-items',
	labels: {
		singular: 'Пункт меню',
		plural: 'Пункты меню',
	},
	fields: [
		{
			name: 'label',
			label: 'Название пункта меню',
			type: 'text',
			required: true,
		},
		{
			name: 'menuListType',
			label: 'Тип содержимого',
			type: 'select',
			options: [
				{
					label: 'Список подменю',
					value: 'submenu',
				},
				{
					label: 'Ссылка',
					value: 'link',
				},
			],
			required: true,
		},
		{
			name: 'menuList',
			label: 'Список подменю',
			type: 'array',
			admin: {
				condition: data => data.menuListType === 'submenu',
			},
			fields: [
				{
					name: 'menuLabel',
					label: 'Название подменю',
					type: 'text',
					required: true,
				},
				{
					name: 'menuItems',
					label: 'Пункты подменю',
					type: 'array',
					required: true,
					fields: [
						{
							name: 'linkList',
							label: 'Список ссылок',
							type: 'array',
							fields: [
								{
									name: 'label',
									label: 'Название ссылки',
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
											label: 'Кастомная ссылка',
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
									label: 'Кастомная ссылка',
									type: 'text',
									admin: {
										condition: (data, siblingData) =>
											siblingData.linkType === 'custom',
									},
								},
							],
						},
						{
							name: 'richText',
							label: 'Разметка',
							type: 'richText',
						},
						{
							name: 'additionalMenu',
							label: 'Дополнительное меню',
							type: 'group',
							fields: [
								{
									name: 'nameMenu',
									label: 'Название дополнительного меню',
									type: 'text',
								},
								{
									name: 'links',
									label: 'Ссылки дополнительного меню',
									type: 'array',
									fields: [
										{
											name: 'label',
											label: 'Название ссылки',
											type: 'text',
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
													label: 'Кастомная ссылка',
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
											label: 'Кастомная ссылка',
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
					label: 'Кастомная ссылка',
					value: 'custom',
				},
			],
			required: true,
			admin: {
				condition: data => data.menuListType === 'link',
			},
		},
		{
			name: 'page',
			label: 'Страница',
			type: 'relationship',
			relationTo: 'pages',
			admin: {
				condition: data =>
					data.menuListType === 'link' && data.linkType === 'page',
			},
		},
		{
			name: 'customLink',
			label: 'Кастомная ссылка',
			type: 'text',
			admin: {
				condition: data =>
					data.menuListType === 'link' && data.linkType === 'custom',
			},
		},
		{
			name: 'pageSlug',
			label: 'Slug страницы',
			type: 'text',
			admin: {
				readOnly: true,
				hidden: true,
			},
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

				if (doc.page && typeof doc.page === 'object' && doc.page.id) {
					doc.pageSlug = await updatePageSlug(doc.page.id)
					doc.page = doc.page.id
				}

				if (doc.menuList) {
					for (const submenu of doc.menuList) {
						for (const item of submenu.menuItems) {
							if (item.linkList) {
								await processLinks(item.linkList)
							}
							if (item.additionalMenu && item.additionalMenu.links) {
								await processLinks(item.additionalMenu.links)
							}
						}
					}
				}

				return doc
			},
		],
	},
}

export default MenuItems
