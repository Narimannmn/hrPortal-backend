import { webpackBundler } from '@payloadcms/bundler-webpack'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'
import { buildConfig } from 'payload/config'
import Contacts from './collections/Contacts'
import Documents from './collections/Documents'
import Files from './collections/Files'
import Icons from './collections/Icons'
import Media from './collections/Media'
import MenuItems from './collections/MenuItems'
import Pages from './collections/Pages'
import SecondaryMenu from './collections/SecondaryMenu'
import Users from './collections/Users'
import CompareCards from './collections/debit.cards/CardTable'
import DebitCardCategories from './collections/debit.cards/DebitCards'
import FormCardSelection from './collections/forms/formCardSelection'
import FormForOrderingCall from './collections/forms/formForOrderingCall'
import FormForPerson from './collections/forms/formForPerson'
import FormWithAdditionalInfo from './collections/forms/formWithAdditionalInfo'
import FormWithCity from './collections/forms/formWithCity'
import FormWithCreditDelinquencies from './collections/forms/formWithCreditDelinquencies'
import FormWithTextMessage from './collections/forms/formWithTextMessage'
import FormWithUploadingDocument from './collections/forms/formWithUploadingDocument'
import Banks from './collections/map/bank'
import Offices from './collections/map/offices'
import ServiceList from './collections/map/service.list'
import Terminals from './collections/map/terminals'
import Filters from './collections/marketplace/filters'
import ForSaleItems from './collections/marketplace/marketplace'
import PostCategories from './collections/posts/PostCategories'
import Posts from './collections/posts/Posts'

export default buildConfig({
	admin: {
		user: Users.slug,
		bundler: webpackBundler(),
	},
	editor: slateEditor({}),
	collections: [
		Users,
		Pages,
		Media,
		Icons,
		SecondaryMenu,
		Documents,
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
		FormWithTextMessage,
		FormWithCity,
		FormWithAdditionalInfo,
		FormForPerson,
		FormForOrderingCall,
		FormWithCreditDelinquencies,
		FormCardSelection,
		FormWithUploadingDocument,
	],
	typescript: {
		outputFile: path.resolve(__dirname, 'payload-types.ts'),
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
	},
	plugins: [
		// cloudStorage({
		// 	collections: {
		// 		media: {
		// 			adapter: s3Adapter({
		// 				config: {
		// 					region: process.env.S3_REGION,
		// 					endpoint: process.env.S3_ENDPOINT,
		// 					credentials: {
		// 						accessKeyId: process.env.S3_ACCESS_KEY,
		// 						secretAccessKey: process.env.S3_SECRET_KEY,
		// 					},
		// 				},
		// 				bucket: process.env.S3_BUCKET_NAME,
		// 			}),
		// 		},
		// 	},
		// }),
	],
	db: postgresAdapter({
		pool: {
			connectionString: process.env.DATABASE_URI,
		},
	}),
})
