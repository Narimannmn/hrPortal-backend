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
		},
		{
			name: 'browser',
			label: 'Browser',
			type: 'text',
		},
		{
			name: 'os',
			label: 'OS',
			type: 'text',
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
				},
				{
					name: 'vendor',
					label: 'Vendor',
					type: 'text',
				},
				{
					name: 'model',
					label: 'Model',
					type: 'text',
				},
			],
		},
	],
}
