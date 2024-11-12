import {Block} from "payload/types";


export const Accordion: Block['fields'] = [
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
        name: 'docList',
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
                        required: true,
                    },
                    {
                        name: 'RU_doc',
                        type: 'upload',
                        label: 'Рус - Документ',
                        relationTo: 'files',
                        required: true,
                    },
                    {
                        name: 'EN_doc',
                        type: 'upload',
                        label: 'En - Документ',
                        relationTo: 'files',
                        required: true,
                    },
                ]
            },
        ],
    }
]