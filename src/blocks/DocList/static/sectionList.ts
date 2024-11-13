import {Block} from "payload/types";


export const SectionList: Block['fields'] = [
    {
        name: 'sectionTitle',
        label: 'Заголовок раздела',
        type: 'group',
        fields: [
            {
                name: 'labelKz',
                label: 'Қаз',
                type: 'text',
            },
            {
                name: 'labelRu',
                label: 'Рус',
                type: 'text',
            },
            {
                name: 'labelEn',
                label: 'En',
                type: 'text',
            },
        ],
    },
    {
        name: 'docs',
        label: 'Список документов',
        type: 'array',
        fields: [
            {
                name: 'docItem',
                label: 'Документ',
                type: 'group',
                fields: [
                    {
                        name: 'KZ_doc',
                        type: 'upload',
                        label: 'Қаз - Документ',
                        relationTo: 'files',
                    },
                    {
                        name: 'RU_doc',
                        type: 'upload',
                        label: 'Рус - Документ',
                        relationTo: 'files',
                    },
                    {
                        name: 'EN_doc',
                        type: 'upload',
                        label: 'En - Документ',
                        relationTo: 'files',
                    },
                ]
            },
            {
                name: 'info',
                label: 'Информация',
                type: 'group',
                fields: [
                    {
                        name: 'labelKz',
                        label: 'Қаз',
                        type: 'text',
                    },
                    {
                        name: 'labelRu',
                        label: 'Рус',
                        type: 'text',
                    },
                    {
                        name: 'labelEn',
                        label: 'En',
                        type: 'text',
                    },
                ],
            },
            {
                name: 'innerAcc',
                label: 'Внутренний Аккордион',
                type: 'group',
                fields: [
                    {
                        name: 'title',
                        label: 'Название аккордеона',
                        type: 'group',
                        fields: [
                            {
                                name: 'labelKz',
                                label: 'Қаз',
                                type: 'text',
                            },
                            {
                                name: 'labelRu',
                                label: 'Рус',
                                type: 'text',
                            },
                            {
                                name: 'labelEn',
                                label: 'En',
                                type: 'text',
                            },
                        ],
                    },
                    {
                        name: 'docs',
                        label: 'Содержимое аккордеона | Документы',
                        type: 'array',
                        fields: [
                            {
                                name: 'docItem',
                                label: 'Документ',
                                type: 'group',
                                fields: [
                                    {
                                        name: 'KZ_doc',
                                        type: 'upload',
                                        label: 'Қаз - Документ',
                                        relationTo: 'files',
                                    },
                                    {
                                        name: 'RU_doc',
                                        type: 'upload',
                                        label: 'Рус - Документ',
                                        relationTo: 'files',
                                    },
                                    {
                                        name: 'EN_doc',
                                        type: 'upload',
                                        label: 'En - Документ',
                                        relationTo: 'files',
                                    },
                                ]
                            },
                        ],
                    },
                ]
            }
        ],
    },
]