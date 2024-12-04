import Departments from './collections/Departments'
import Home from './collections/Home'
import Icons from './collections/Icons'
import JobResponses from './collections/JobResponses'
import Jobs from './collections/Jobs'
import JobGroups from './collections/JobsGroup'
import Media from './collections/Media'
import { News } from './collections/News'
import NewsGroups from './collections/NewsGroups'
import NewsResponses from './collections/NewsResponses'
import Users from './collections/Users'
import Employees from './collections/employees'
import { HighlightedText } from './components/HighlightedText'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloud } from '@payloadcms/plugin-cloud'
import { cloudStorage } from '@payloadcms/plugin-cloud-storage'
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3'
import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'
import { openapi, swaggerUI } from 'payload-oapi'
import { buildConfig } from 'payload/config'

const storageAdapter = s3Adapter({
	config: {
		region: process.env.S3_REGION,
		endpoint: process.env.S3_ENDPOINT,
		forcePathStyle: true, // Use path-style URLs
		credentials: {
			accessKeyId: process.env.S3_ACCESS_KEY,
			secretAccessKey: process.env.S3_SECRET_KEY,
		},
	},
	bucket: process.env.S3_BUCKET_NAME,
})

export default buildConfig({
	email: {
		transportOptions: {
			host: process.env.SMTP_HOST,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
			port: Number(process.env.SMTP_PORT),
			secure: Number(process.env.SMTP_PORT) === 465,
			requireTLS: true,
		},
		fromName: 'hrPortal',
		fromAddress: 'hrPortal@example.com',
	},
	admin: {
		user: Users.slug,
		bundler: webpackBundler(),
		webpack: config => ({
			...config,
			resolve: {
				...config.resolve,
				fallback: {
					...config.resolve.fallback,
					fs: false,
				},
			},
		}),
	},
	editor: slateEditor({
		admin: {
			leaves: [
				'bold',
				'code',
				'italic',
				'strikethrough',
				'underline',
				HighlightedText,
			],
		},
	}),
	collections: [
		Users,
		Media,
		Employees,
		News,
		NewsGroups,
		Departments,
		Jobs,
		JobGroups,
		JobResponses,
		NewsResponses,
		Home,
		Icons
	],
	upload: {
		limits: {
			fileSize: 24 * 1024 * 1024, // 24MB, written in bytes
		},
	},
	typescript: {
		outputFile: path.resolve(__dirname, './generated-types.ts'),
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
	},
	plugins: [
		openapi({
			openapiVersion: '3.0',
			metadata: { title: 'Dev API', version: '0.0.1' },
		}),
		swaggerUI({
			docsUrl: '/api/docs',
		}),
		payloadCloud(),
		cloudStorage({
			collections: {
				media: {
					adapter: storageAdapter,
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
