import { CollectionConfig } from 'payload/types'

const PrivateMap: CollectionConfig = {
	slug: 'PrivateMap',
	labels: {
		singular: 'Карта для приват',
		plural: 'Карта для приват',
	},
	access: {
		read: () => true,
	},
	admin: {
		group: 'Private',
	},
	fields: [
		{
			name: 'name',
			label: 'Название',
			type: 'group',
			fields: [
				{
					name: 'labelEn',
					label: 'Английский',
					type: 'text',
					required: true,
				},
				{
					name: 'labelRu',
					label: 'Русский',
					type: 'text',
					required: true,
				},
				{
					name: 'labelKz',
					label: 'Казахский',
					type: 'text',
					required: true,
				},
			],
		},
		{
			name: 'latitude',
			label: 'Широта',
			type: 'number',
			required: true,
		},
		{
			name: 'longitude',
			label: 'Долгота',
			type: 'number',
			required: true,
		},
		{
			name: 'category',
			label: 'Категория',
			type: 'relationship',
			relationTo: 'PrivateCategory',
			required: true,
		},
		{
			name: 'cities',
			type: 'array',
			label: 'Города',
			fields: [
				{
					name: 'city',
					type: 'select',
					label: 'Город',
					options: [
						{
							label: 'Ақсу / Аксу / Aksu',
							value: 'Aksu',
						},
						{
							label: 'Ақтау / Актау / Aktau',
							value: 'Aktau',
						},
						{
							label: 'Ақтөбе / Актобе / Aktobe',
							value: 'Aktobe',
						},
						{
							label: 'Алматы / Алматы / Almaty',
							value: 'Almaty',
						},
						{
							label: 'Алтай / Алтай / Altai',
							value: 'Altai',
						},
						{
							label: 'Арқалық / Аркалык / Arkalyk',
							value: 'Arkalyk',
						},
						{
							label: 'Астана / Астана / Astana',
							value: 'Astana',
						},
						{
							label: 'Атырау / Атырау / Atyrau',
							value: 'Atyrau',
						},
						{
							label: 'Балқаш / Балхаш / Balkhash',
							value: 'Balkhash',
						},
						{
							label: 'Жаңаөзен / Жанаозен / Zhanaozen',
							value: 'Zhanaozen',
						},
						{
							label: 'Жезқазған / Жезказган / Zhezkazgan',
							value: 'Zhezkazgan',
						},
						{
							label: 'Зайсан / Зайсан / Zaisan',
							value: 'Zaisan',
						},
						{
							label: 'Қарағанды / Караганда / Karaganda',
							value: 'Karaganda',
						},
						{
							label: 'Көкшетау / Кокшетау / Kokshetau',
							value: 'Kokshetau',
						},
						{
							label: 'Қостанай / Костанай / Kostanay',
							value: 'Kostanay',
						},
						{
							label: 'Құлсары / Кульсары / Kulsary',
							value: 'Kulsary',
						},
						{
							label: 'Қызылорда / Кызылорда / Kyzylorda',
							value: 'Kyzylorda',
						},
						{
							label: 'Лисаковск / Лисаковск / Lisakovsk',
							value: 'Lisakovsk',
						},
						{
							label: 'Павлодар / Павлодар / Pavlodar',
							value: 'Pavlodar',
						},
						{
							label: 'Петропавл / Петропавловск / Petropavlovsk',
							value: 'Petropavlovsk',
						},
						{
							label: 'Риддер / Риддер / Ridder',
							value: 'Ridder',
						},
						{
							label: 'Рудный / Рудный / Rudny',
							value: 'Rudny',
						},
						{
							label: 'Сарыағаш / Сарыагаш / Saryagash',
							value: 'Saryagash',
						},
						{
							label: 'Семей / Семей / Semei',
							value: 'Semei',
						},
						{
							label: 'Талдықорған / Талдыкорган / Taldykorgan',
							value: 'Taldykorgan',
						},
						{
							label: 'Тараз / Тараз / Taraz',
							value: 'Taraz',
						},
						{
							label: 'Теміртау / Темиртау / Temirtau',
							value: 'Temirtau',
						},
						{
							label: 'Түркістан / Туркестан / Turkestan',
							value: 'Turkestan',
						},
						{
							label: 'Орал / Уральск / Oral',
							value: 'Oral',
						},
						{
							label: 'Өскемен / Усть-Каменогорск / Ust-Kamenogorsk',
							value: 'Ust-Kamenogorsk',
						},
						{
							label: 'Хромтау / Хромтау / Khromtau',
							value: 'Khromtau',
						},
						{
							label: 'Шахтинск / Шахтинск / Shakhtinsk',
							value: 'Shakhtinsk',
						},
						{
							label: 'Шымкент / Шымкент / Shymkent',
							value: 'Shymkent',
						},
						{
							label: 'Екібастұз / Экибастуз / Ekibastuz',
							value: 'Ekibastuz',
						},
					],
				},
			],
		},
	],
}

export default PrivateMap
