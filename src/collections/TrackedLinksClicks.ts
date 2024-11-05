import getChartDataHandler from './handlers/getChartDataHandler'
import { CollectionConfig } from 'payload/types'

export const TrackedLinksClicks: CollectionConfig = {
	slug: 'trackedLinksClicks',
	labels: {
		singular: 'Отслеживаемая ссылка клика',
		plural: 'Отслеживаемые ссылки клика',
	},
	endpoints: [
		{
			path: '/getChartData/:trackedLinkId',
			method: 'get',
			handler: getChartDataHandler,
		},
	],
	fields: [
		{
			name: 'trackedLink',
			label: 'Отслеживаемая ссылка',
			type: 'relationship',
			relationTo: 'trackedLinks',
			required: true,
			admin: {
				readOnly: true,
			},
		},
		{
			name: 'browser',
			label: 'Browser',
			type: 'text',
			admin: {
				readOnly: true,
			},
		},
		{
			name: 'os',
			label: 'OS',
			type: 'text',
			admin: {
				readOnly: true,
			},
		},
		{
			name: 'device',
			label: 'Device',
			type: 'group',
			fields: [
				{
					name: 'type',
					label: 'Type',
					type: 'text',
					admin: {
						readOnly: true,
					},
				},
				{
					name: 'vendor',
					label: 'Vendor',
					type: 'text',
					admin: {
						readOnly: true,
					},
				},
				{
					name: 'model',
					label: 'Model',
					type: 'text',
					admin: {
						readOnly: true,
					},
				},
			],
		},
		{
			name: 'utms',
			label: 'UTM-метки',
			type: 'group',
			fields: [
				{
					name: 'utm_source',
					label: 'Источник кампании',
					type: 'text',
					required: true,
					admin: {
						readOnly: true,
					},
				},
				{
					name: 'utm_medium',
					label: 'Тип трафика',
					type: 'text',
					required: true,
					admin: {
						readOnly: true,
					},
				},
				{
					name: 'utm_campaign',
					label: 'Название кампании',
					type: 'text',
					required: true,
					admin: {
						readOnly: true,
					},
				},
				{
					name: 'utm_content',
					label: 'Идентификатор объявления',
					type: 'text',
					admin: {
						readOnly: true,
					},
				},
				{
					name: 'utm_term',
					label: 'Ключевое слово',
					type: 'text',
					admin: {
						readOnly: true,
					},
				},
			],
		},
	],
}
