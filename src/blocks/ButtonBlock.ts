import {Block} from "payload/types";


export const ButtonBlock: Block = {
    slug: 'ButtonBlock',
    labels: {
        singular: 'Кнопка',
        plural: 'Кнопка',
    },
    fields: [
        {
            name: 'marginY',
            label: 'Отступы по Y координате',
            type: 'group',
            fields: [
                {
                    name: 'top',
                    label: 'Верх',
                    type: 'number',
                    defaultValue: 76,
                    required: true
                },
                {
                    name: 'bottom',
                    label: 'Низ',
                    type: 'number',
                    defaultValue: 40,
                    required: true,
                },
                {
                    name: 'mobileTop',
                    label: 'Верх на мобилках',
                    type: 'number',
                    defaultValue: 48,
                    required: true,
                },
                {
                    name: 'mobileBottom',
                    label: 'Низ на мобилках',
                    type: 'number',
                    defaultValue: 20,
                    required: true,
                },
            ]
        },
        {
            name: 'variant',
            label: 'Вариант кнопки',
            type: 'select',
            required: true,
            options: [
                {
                    label: 'Золотой фон с черной надписью',
                    value: 'golden',
                },
                {
                    label: 'Розовый фон с белой надписью',
                    value: 'primary',
                },
                {
                    label: 'Белый фон с черной надписью',
                    value: 'secondary',
                },
                {
                    label: 'Прозрачный фон с розовой надписью',
                    value: 'tertiary',
                },
                {
                    label: 'Прозрачный фон с серой надписью',
                    value: 'ghost',
                },
            ],
        },
        {
            name: 'label',
            label: 'Надпись на кнопке',
            type: 'group',
            fields: [
                {
                    name: 'labelRu',
                    label: 'Надпись (Рус)',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'labelEn',
                    label: 'Надпись (En)',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'labelKz',
                    label: 'Надпись (Қаз)',
                    type: 'text',
                    required: true,
                },
            ],
        },
        {
            name: 'linkType',
            label: 'Тип ссылки',
            type: 'select',
            options: [
                {
                    label: 'Произвольная ссылка',
                    value: 'custom',
                },
                {
                    label: 'Ссылка на страницу',
                    value: 'page',
                },
            ],
            required: true,
        },
        {
            name: 'customLink',
            label: 'Произвольная ссылка',
            type: 'text',
            admin: {
                condition: (_, siblingData) =>
                    siblingData.linkType === 'custom',
            },
        },
        {
            name: 'pageSlug',
            label: 'Ссылка на страницу',
            type: 'relationship',
            relationTo: 'pages',
            admin: {
                condition: (_, siblingData) =>
                    siblingData.linkType === 'page',
            },
        },
    ],
}