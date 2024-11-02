import {Block} from 'payload/types'

const PrivateLoungeKeyCard: Block = {
    slug: 'PrivateLoungeKeyCard',
    labels: {
        singular: 'Приват Lounge Key карточка',
        plural: 'Приват Lounge Key карточка',
    },
    fields: [
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
            name: 'subTitle',
            label: 'Подзаголовок',
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
            name: 'appLinkCards',
            label: 'Карточки со ссылками',
            type: 'array',
            fields: [
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
                    name: 'appStore',
                    label: 'App Store',
                    type: 'group',
                    fields: [
                        {
                            name: 'url',
                            label: 'URL',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'icon',
                            label: 'Иконка',
                            type: 'upload',
                            relationTo: 'icons',
                            required: true,
                        },
                    ],
                },
                {
                    name: 'googlePlay',
                    label: 'Google Play',
                    type: 'group',
                    fields: [
                        {
                            name: 'url',
                            label: 'URL',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'icon',
                            label: 'Иконка',
                            type: 'upload',
                            relationTo: 'icons',
                            required: true,
                        },
                    ],
                },
                {
                    name: 'innerCard',
                    label: 'Внутренняя карточка',
                    type: 'group',
                    fields: [
                        {
                            name: 'img',
                            label: 'Изображение',
                            type: 'upload',
                            relationTo: 'media',
                            required: true,
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
                            name: 'subTitle',
                            label: 'Подзаголовок',
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
                    ],
                },
            ]
        },
        {
            name: 'description',
            label: 'Описание',
            type: 'group',
            fields: [
                {
                    name: 'labelKz',
                    label: 'Подзаголовок (Kz)',
                    type: 'richText',
                    required: true,
                },
                {
                    name: 'labelRu',
                    label: 'Подзаголовок (Ru)',
                    type: 'richText',
                    required: true,
                },
                {
                    name: 'labelEn',
                    label: 'Подзаголовок (En)',
                    type: 'richText',
                    required: true,
                },
            ],
        },
    ],
}

export default PrivateLoungeKeyCard
