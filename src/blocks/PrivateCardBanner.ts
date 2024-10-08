import {Block} from 'payload/types'

const PrivateCardBanner: Block = {
    slug: 'PrivateCardBanner',
    labels: {
        singular: 'Баннер для карточек для приватной страницы',
        plural: 'Баннер для карточек для приватной страницы',
    },
    fields: [
        {
            name: 'icon',
            label: 'Лого',
            type: 'upload',
            relationTo: 'icons',
            required: false,
        },
        {
            name: 'title',
            label: 'Заголовок',
            type: 'group',
            fields: [
                {
                    name: 'labelKz',
                    label: 'Заголовок (Kz)',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'labelRu',
                    label: 'Заголовок (Ru)',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'labelEn',
                    label: 'Заголовок (En)',
                    type: 'text',
                    required: true,
                },
            ],
        },
        {
            name: 'subtitle',
            label: 'Подзаголовок',
            type: 'group',
            fields: [
                {
                    name: 'labelKz',
                    label: 'Подзаголовок (Kz)',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'labelRu',
                    label: 'Подзаголовок (Ru)',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'labelEn',
                    label: 'Подзаголовок (En)',
                    type: 'text',
                    required: true,
                },
            ],
        },
        {
            name: 'buttonText',
            label: 'Текст кнопки',
            type: 'group',
            fields: [
                {
                    name: 'labelKz',
                    label: 'Текст кнопки (Kz)',
                    type: 'text',
                    required: false,
                },
                {
                    name: 'labelRu',
                    label: 'Текст кнопки (Ru)',
                    type: 'text',
                    required: false,
                },
                {
                    name: 'labelEn',
                    label: 'Текст кнопки (En)',
                    type: 'text',
                    required: false,
                },
            ],
        },
        {
            name: 'linkType',
            label: 'Тип ссылки',
            type: 'select',
            options: [
                {
                    label: 'Страница',
                    value: 'page',
                },
                {
                    label: 'Произвольная ссылка',
                    value: 'custom',
                },
            ],
            required: false,
        },
        {
            name: 'pageSlug',
            label: 'Ссылка на страницу',
            type: 'relationship',
            relationTo: 'pages',
            admin: {
                condition: (_, siblingData) => siblingData.linkType === 'page',
            },
        },
        {
            name: 'customLink',
            label: 'Произвольная ссылка',
            type: 'text',
            admin: {
                condition: (_, siblingData) => siblingData.linkType === 'custom',
            },
        },
        {
            name: 'imageUrl',
            label: 'Ссылка на изображение',
            type: 'upload',
            relationTo: 'media',
            required: true,
        }
    ],
}

export default PrivateCardBanner
