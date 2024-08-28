import Contacts from './collections/Contacts'
import DebitCardData from './collections/DebitCards'
import Icons from './collections/Icons'
import Media from './collections/Media'
import MenuItems from './collections/MenuItems'
import Pages from './collections/Pages'
import SecondaryMenu from './collections/SecondaryMenu'
import Users from './collections/Users'
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
import AWS from 'aws-sdk'
import path from 'path'
import { buildConfig } from 'payload/config'

const s3 = new AWS.S3({
	region: process.env.S3_REGION,
	endpoint: 'http://172.25.43.42:9000',
	credentials: {
		accessKeyId: process.env.S3_ACCESS_KEY,
		secretAccessKey: process.env.S3_SECRET_KEY,
	},
	s3ForcePathStyle: true,
})

const generatePresignedURL = (bucket, key, expiresIn = 60) => {
	return s3.getSignedUrl('putObject', {
		Bucket: bucket,
		Key: key,
		Expires: expiresIn,
	})
}

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
		Filters,
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
							region: process.env.S3_REGION,
							endpoint: 'http://172.25.43.42:9000',
							credentials: {
								accessKeyId: process.env.S3_ACCESS_KEY,
								secretAccessKey: process.env.S3_SECRET_KEY,
							},
						},
						bucket: process.env.S3_BUCKET_NAME,
						generatePresignedURL,
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
