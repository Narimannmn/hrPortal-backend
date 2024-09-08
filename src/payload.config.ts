import Contacts from './collections/Contacts'
import Files from './collections/Files'
import Icons from './collections/Icons'
import Media from './collections/Media'
import MenuItems from './collections/MenuItems'
import Pages from './collections/Pages'
import SecondaryMenu from './collections/SecondaryMenu'
import Users from './collections/Users'
import CompareCards from './collections/debit.cards/CardTable'
import DebitCardCategories from './collections/debit.cards/DebitCards'
import Directors from './collections/directors'
import Employees from './collections/employees'
import History from './collections/history'
import Banks from './collections/map/bank'
import Offices from './collections/map/offices'
import ServiceList from './collections/map/service.list'
import Terminals from './collections/map/terminals'
import Filters from './collections/marketplace/filters'
import ForSaleItems from './collections/marketplace/marketplace'
import PostCategories from './collections/posts/PostCategories'
import Posts from './collections/posts/Posts'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloud } from '@payloadcms/plugin-cloud'
import { cloudStorage } from '@payloadcms/plugin-cloud-storage'
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3'
import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'
import { buildConfig } from 'payload/config'

// JSONB field definition
const JSONBField = {
	name: 'dynamicData',
	type: 'json',
	label: 'Dynamic Data',
}

// Automatically add the JSONB field to each collection
const addJSONBToAllCollections = collections => {
	return collections.map(collection => ({
		...collection,
		fields: [...collection.fields, JSONBField],
	}))
}

// Array of collections
const collections = [
	Users,
	Pages,
	Media,
	Icons,
	SecondaryMenu,
	Contacts,
	MenuItems,
	Posts,
	PostCategories,
	ForSaleItems,
	Filters,
	DebitCardCategories,
	CompareCards,
	Banks,
	Terminals,
	Offices,
	ServiceList,
	Files,
	Directors,
	Employees,
	History,
]

// Apply the JSONB field to all collections
const collectionsWithJSONB = addJSONBToAllCollections(collections)

export default buildConfig({
	admin: {
		user: Users.slug,
		bundler: webpackBundler(),
	},
	editor: slateEditor({}),
	collections: collectionsWithJSONB,
	typescript: {
		outputFile: path.resolve(__dirname, 'payload-types.ts'),
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
	},
	plugins: [
		payloadCloud(),
		// cloudStorage({
		//   collections: {
		//     media: {
		//       adapter: s3Adapter({
		//         config: {
		//           region: process.env.S3_REGION,
		//           endpoint: process.env.S3_ENDPOINT,
		//           credentials: {
		//             accessKeyId: process.env.S3_ACCESS_KEY,
		//             secretAccessKey: process.env.S3_SECRET_KEY,
		//           },
		//         },
		//         bucket: process.env.S3_BUCKET_NAME,
		//       }),
		//     },
		//   },
		// }),
	],
	db: postgresAdapter({
		pool: {
			connectionString: process.env.DATABASE_URI,
		},
	}),
})
