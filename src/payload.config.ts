import Contacts from './collections/Contacts'
import Documents from './collections/Documents'
import FavouriteCategories from './collections/FavouriteCategories'
import Files from './collections/Files'
import Icons from './collections/Icons'
import InnerPage from './collections/InnterPage'
import MarketplaceMedia from './collections/MarketPlaceMedia'
import Media from './collections/Media'
import MenuItems from './collections/MenuItems'
import MenuOrder from './collections/MenuOrder'
import Pages from './collections/Pages'
import SecondaryMenu from './collections/SecondaryMenu'
import ShoppingMalls from './collections/ShoppingMalls'
import StoresCategories from './collections/StoreCategories'
import Stores from './collections/Stores'
import { TrackedLinks } from './collections/TrackedLinks'
import { TrackedLinksClicks } from './collections/TrackedLinksClicks'
import Users from './collections/Users'
import Videos from './collections/Videos'
import { CreditBlock } from './collections/business.credits/BusinessCredits'
import CreditCardCategories from './collections/credit.cards/CreditCardCategories'
import CreditCardPage from './collections/credit.cards/CreditCardPage'
import CreditCards from './collections/credit.cards/CreditCards'
import DebitCardCategories from './collections/debit.cards/DebitCardCategories'
import DebitCardPage from './collections/debit.cards/DebitCardPage'
import DebitCards from './collections/debit.cards/DebitCards'
import DebitTariff from './collections/debit.cards/Tariff'
import TariffCategories from './collections/debit.cards/TariffCategories'
import TariffSubCat from './collections/debit.cards/TariffSubCat'
import Directors from './collections/directors'
import Employees from './collections/employees'
import FormCardSelection from './collections/forms/formCardSelection'
import FormForOrderingCall from './collections/forms/formForOrderingCall'
import FormForPerson from './collections/forms/formForPerson'
import FormForSms from './collections/forms/formForSms'
import FormPreferentialLoan from './collections/forms/formPreferentialLoan'
import FormWithAdditionalInfo from './collections/forms/formWithAdditionalInfo'
import FormWithCity from './collections/forms/formWithCity'
import FormWithCreditDelinquencies from './collections/forms/formWithCreditDelinquencies'
import FormWithTextMessage from './collections/forms/formWithTextMessage'
import FormWithUploadingDocument from './collections/forms/formWithUploadingDocument'
import History from './collections/history'
import Banks from './collections/map/bank'
import Offices from './collections/map/offices'
import ServiceList from './collections/map/service.list'
import Terminals from './collections/map/terminals'
import MarketplaceCategories from './collections/marketplace/categories'
import HotSale from './collections/marketplace/hot.sale'
import ForSaleItems from './collections/marketplace/marketplace'
import MarketplaceRegions from './collections/marketplace/regions'
import MarketplaceServices from './collections/marketplace/services'
import Promotions from './collections/partners/discounts'
import PostCategories from './collections/posts/PostCategories'
import Posts from './collections/posts/Posts'
import PrivateCategory from './collections/private/PrivateCategory'
import PrivateMap from './collections/private/PrivateMap'
import { QuestionsSection } from './collections/questions/QuestionSections'
import { Questions } from './collections/questions/Questions'
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
		credentials: {
			accessKeyId: process.env.S3_ACCESS_KEY,
			secretAccessKey: process.env.S3_SECRET_KEY,
		},
	},
	bucket: process.env.S3_BUCKET_NAME,
})

export default buildConfig({
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
		Pages,
		Media,
		Icons,
		SecondaryMenu,
		Documents,
		Contacts,
		MenuItems,
		Posts,
		PostCategories,
		Banks,
		Terminals,
		Offices,
		ServiceList,
		Files,
		Directors,
		Employees,
		History,
		FavouriteCategories,
		StoresCategories,
		ShoppingMalls,
		Stores,
		MenuOrder,
		PrivateCategory,
		PrivateMap,
		CreditBlock,
		Videos,
		Questions,
		QuestionsSection,
		InnerPage,
		FormWithTextMessage,
		FormWithCity,
		FormWithAdditionalInfo,
		FormForPerson,
		FormPreferentialLoan,
		FormForSms,
		FormForOrderingCall,
		FormWithCreditDelinquencies,
		FormCardSelection,
		FormWithUploadingDocument,
		DebitCards,
		DebitCardCategories,
		DebitCardPage,
		TariffCategories,
		CreditCards,
		CreditCardCategories,
		CreditCardPage,
		Promotions,
		DebitTariff,
		TariffSubCat,

		// Link tracking
		TrackedLinks,
		TrackedLinksClicks,

		// Marketplace
		HotSale,
		MarketplaceMedia,
		ForSaleItems,
		MarketplaceRegions,
		MarketplaceServices,
		MarketplaceCategories,
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
				icons: {
					adapter: storageAdapter,
				},
				files: {
					adapter: storageAdapter,
				},
				videos: {
					adapter: storageAdapter,
				},
				'marketplace-media': {
					adapter: storageAdapter,
				},
				// 'employee-media': {
				// 	adapter: storageAdapter,
				// },
				// documents: {
				// 	adapter: storageAdapter,
				// },
			},
		}),
	],
	db: postgresAdapter({
		pool: {
			connectionString: process.env.DATABASE_URI,
		},
	}),
})
