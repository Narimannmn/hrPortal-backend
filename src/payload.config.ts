import Contacts from './collections/Contacts'
import DebitCardData from './collections/DebitCards'
import Icons from './collections/Icons'
import Media from './collections/Media'
import MenuItems from './collections/MenuItems'
import Pages from './collections/Pages'
import SecondaryMenu from './collections/SecondaryMenu'
import Users from './collections/Users'
import Categories from './collections/marketplace/categories'
import ForSaleItems from './collections/marketplace/marketplace'
import Regions from './collections/marketplace/region'
import ServiceTypes from './collections/marketplace/service-types'
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
		DebitCardData,
		SecondaryMenu,
		Contacts,
		MenuItems,
		Posts,
		PostCategories,
		ForSaleItems,
		Regions,
		Categories,
		ServiceTypes,
	],
	typescript: {
		outputFile: path.resolve(__dirname, 'payload-types.ts'),
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
	},
	plugins: [
		payloadCloud(),
		cloudStorage({
			collections: {
				media: {
					adapter: s3Adapter({
						config: {
							endpoint: process.env.S3_ENDPOINT,
							credentials: {
								accessKeyId: process.env.S3_ACCESS_KEY_ID,
								secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
							},
						},
						bucket: process.env.S3_BUCKET,
					}),
				},
			},
		}),
	],
	db: postgresAdapter({
		pool: {
			connectionString: process.env.DATABASE_URI,
		},
	}),
})
