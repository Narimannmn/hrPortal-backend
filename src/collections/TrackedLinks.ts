import GenerateLinkButton from '../components/GenerateLinkButton'
import LinkClickChart from '../components/LinkClickChart'
import { CollectionConfig } from 'payload/types'

export const TrackedLinks: CollectionConfig = {
	slug: 'trackedLinks',
	labels: {
		singular: 'Отслеживаемая ссылка',
		plural: 'Отслеживаемые ссылки',
	},
	admin: {
		useAsTitle: 'name',
	},
	fields: [
		{
			name: 'name',
			label: 'Название',
			type: 'text',
		},
		{
			name: 'slug',
			label: 'Сокращенная ссылка',
			type: 'text',
			required: true,
		},
		{
			name: 'link',
			label: 'Адрес вашей страницы',
			type: 'text',
			required: true,
		},
		{
			name: 'utm',
			label: 'UTM-метки',
			type: 'group',
			fields: [
				{
					name: 'utm_source',
					label: 'Источник кампании',
					type: 'text',
					required: true,
					admin: {
						placeholder: 'google, yandex, ...',
					},
				},
				{
					name: 'utm_medium',
					label: 'Тип трафика',
					type: 'text',
					required: true,
					admin: {
						placeholder: 'cpc, banner, email, ...',
					},
				},
				{
					name: 'utm_campaign',
					label: 'Название кампании',
					type: 'text',
					required: true,
					admin: {
						placeholder: 'sale, promo, discount, ...',
					},
				},
				{
					name: 'utm_content',
					label: 'Идентификатор объявления',
					type: 'text',
					admin: {
						placeholder: 'link, landing-page, ...',
					},
				},
				{
					name: 'utm_term',
					label: 'Ключевое слово',
					type: 'text',
					admin: {
						placeholder: 'keyword, ...',
					},
				},
			],
		},
		{
			name: 'href',
			label: 'Ссылка',
			type: 'text',
			admin: {
				readOnly: true,
			},
			required: true,
		},
		{
			type: 'ui',
			name: 'generateLinkButton',
			admin: {
				components: {
					Field: GenerateLinkButton,
				},
			},
		},
		{
			type: 'ui',
			name: 'linkClickChart',
			admin: {
				components: {
					Field: LinkClickChart,
				},
			},
		},
	],
}
