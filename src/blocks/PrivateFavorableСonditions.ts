import {Block} from 'payload/types'

const PrivateFavorableConditions: Block = {
    slug: 'PrivateFavorableConditions',
    labels: {
        singular: 'Выгодные условия кредитования',
        plural: 'Выгодные условия кредитования',
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

export default PrivateFavorableConditions
