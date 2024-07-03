import DebitCardData from './collections/DebitCards'
import Icons from './collections/Icons'
import Media from './collections/Media'
import MenuItems from './collections/MenuItems'
import Pages from './collections/Pages'
import Users from './collections/Users'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'
import { buildConfig } from 'payload/config'

export default buildConfig({
	admin: {
		user: Users.slug,
		bundler: webpackBundler(),
	},
	editor: slateEditor({}),
	collections: [Users, Pages, Media, DebitCardData, MenuItems, Icons],
	typescript: {
		outputFile: path.resolve(__dirname, 'payload-types.ts'),
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
	},
	// plugins: [payloadCloud()],
	db: mongooseAdapter({
		url: process.env.DATABASE_URI,
	}),
})
