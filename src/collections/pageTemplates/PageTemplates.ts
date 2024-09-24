import AdditionalBonusSection from '../../blocks/AdditionalBonusSection'
import AdvantagesDiffWidth from '../../blocks/AdvantagesDiffWidth'
import { AllStores } from '../../blocks/AllStores'
import { BankLocation } from '../../blocks/BankLocations'
import BonusSection from '../../blocks/BonusSection'
import CardBlockWithIcon from '../../blocks/CardBlockWithIcon'
import CategoryBonusSection from '../../blocks/CategoryBonusSection'
import ContactBannerCard from '../../blocks/ContactBannerCard'
import DigitalCardSection from '../../blocks/DigitalCardSection'
import { DocumentList } from '../../blocks/DocumentList'
import { ForSale } from '../../blocks/ForSale'
import { Hero } from '../../blocks/Hero'
import InsuranceSection from '../../blocks/InsuranceSection'
import { MobileAppCard } from '../../blocks/MobileAppCard'
import { OfficeLocator } from '../../blocks/OfficeLocator'
import PageHeaderBlock from '../../blocks/PageHeaderBlock'
import Partners from '../../blocks/Partners'
import { PostsBlock } from '../../blocks/PostsBlock'
import PrivateAdvantages from '../../blocks/PrivateAdvantages'
import PrivateAdvantagesWithDesc from '../../blocks/PrivateAdvantagesWithDesc'
import PrivateCardBanner from '../../blocks/PrivateCardBanner'
import { PrivateCreditCards } from '../../blocks/PrivateCreditCards'
import PrivateProgramConditions from '../../blocks/PrivateProgramConditions'
import PrivateSlider from '../../blocks/PrivateSlider'
import PrivateTravelCards from '../../blocks/PrivateTravelCards'
import PrivateUsefulArticles from '../../blocks/PrivateUsefulArticles'
import ProductCardsBlock from '../../blocks/ProductCardsBlock'
import PromotionsSection from '../../blocks/PromotionsSection'
import { QRCodeCard } from '../../blocks/QRCodeCard'
import { Questions } from '../../blocks/Questions'
import ReminderForCardholders from '../../blocks/ReminderForCardholders'
import ServicePackages from '../../blocks/ServicePackages'
import ServicePrivilege from '../../blocks/ServicePrivilege'
import SliderHeroWithCardsBlock from '../../blocks/SliderHeroWithCardsBlock'
import TariffLimitsSection from '../../blocks/TariffLimitsSection'
import VerticalCardBlock from '../../blocks/VerticalCardBlock'
import { contactCenter } from '../../blocks/contactCenter'
import { descriptionWithRichtext } from '../../blocks/descriptionWithRichtext'
import { detailsCoin } from '../../blocks/detailsCoin'
import { BoardOfDirectors } from '../../blocks/directors'
import { faq } from '../../blocks/faq'
import { form } from '../../blocks/form'
import { guaranteeTypeCard } from '../../blocks/guaranteeTypeCard'
import { HistoryBlock } from '../../blocks/history'
import { horizontalStatisticCard } from '../../blocks/horizontalStatisticCard'
import { information } from '../../blocks/information'
import { informationCard } from '../../blocks/informationCard'
import { ItemTypes } from '../../blocks/itemTypes'
import { keyPointedCard } from '../../blocks/keyPointedCard'
import { packageOffers } from '../../blocks/packageOffers'
import { servicesCard } from '../../blocks/servicesCard'
import { table } from '../../blocks/table'
import { tariffCard } from '../../blocks/tariffCard'
import { videoPlayer } from '../../blocks/videoPlayer'
import { warningCard } from '../../blocks/warningCard'
import getCollectionHandler from './handlers/getCollectionHandler'
import AttributesHelper from './ui/AttributesHelper'
import { CollectionConfig } from 'payload/types'
import { CurrencyTabList } from "../../blocks/CurrencyTabList";

export const PageTemplates: CollectionConfig = {
	slug: 'pgt',
	labels: {
		singular: 'Шаблон страницы',
		plural: 'Шаблоны страниц',
	},
	access: {
		read: () => true,
	},
	endpoints: [
		{
			path: '/getCollectionSchema/:collection',
			method: 'get',
			handler: getCollectionHandler,
		},
	],
	fields: [
		{
			name: 'attrs',
			type: 'ui',
			admin: {
				components: {
					Field: AttributesHelper,
				},
			},
		},
		{
			name: 'nm',
			label: 'Название',
			type: 'text',
			required: true,
		},
		{
			name: 'slg',
			label: 'Slug',
			type: 'text',
			required: true,
		},
		{
			name: 'coll',
			label: 'Коллекция',
			type: 'select',
			options: [
				{
					label: 'Посты',
					value: 'posts',
				},
			],
		},
		{
			name: 'blk',
			label: 'Блоки',
			type: 'blocks',
      blocks: [
        Hero,
        ItemTypes,
        table,
        detailsCoin,
        packageOffers,
        servicesCard,
        faq,
        SliderHeroWithCardsBlock,
        PageHeaderBlock,
        PostsBlock,
        ProductCardsBlock,
        VerticalCardBlock,
        form,
        horizontalStatisticCard,
        warningCard,
        keyPointedCard,
        descriptionWithRichtext,
        guaranteeTypeCard,
        tariffCard,
        contactCenter,
        informationCard,
        information,
        videoPlayer,
        ForSale,
        CardBlockWithIcon,
        Partners,
        ServicePrivilege,
        PrivateSlider,
        AdditionalBonusSection,
        BonusSection,
        CategoryBonusSection,
        DigitalCardSection,
        InsuranceSection,
        PromotionsSection,
        TariffLimitsSection,
        BankLocation,
        ServicePackages,
        BoardOfDirectors,
        HistoryBlock,
        ContactBannerCard,
        PrivateCreditCards,
        PrivateCardBanner,
        ReminderForCardholders,
        PrivateAdvantages,
        AllStores,
        PrivateAdvantages,
        PrivateAdvantagesWithDesc,
        PrivateTravelCards,
        AdvantagesDiffWidth,
        PrivateProgramConditions,
        QRCodeCard,
        MobileAppCard,
        PrivateUsefulArticles,
        OfficeLocator,
        Questions,
        DocumentList,
        CurrencyTabList,
      ],
    },
  ],
};
