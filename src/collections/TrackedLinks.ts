import LinkClickChart from '../components/LinkClickChart'
import { CollectionConfig } from 'payload/types'

export const TrackedLinks: CollectionConfig = {
	slug: 'trackedLinks',
	labels: {
		singular: 'Отслеживаемая ссылка',
		plural: 'Отслеживаемые ссылки',
	},
	fields: [
		{
			name: 'name',
			label: 'Название',
			type: 'text',
		},
		{
			name: 'slug',
			label: 'slug',
			type: 'text',
			required: true,
		},
		{
			name: 'href',
			label: 'Ссылка',
			type: 'text',
			required: true,
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
