import {Block} from "payload/types";


export const PlainList: Block['fields'] = [
    {
        name: 'maxColumnCount',
        label: 'Максимальное число колонок по горизонтали',
        type: 'radio',
        defaultValue: '2',
        required: false,
        options: [
            {
                label: '1',
                value: '1',
            },
            {
                label: '2',
                value: '2',
            },
        ],
    },
    {
        name: 'docList',
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
        ],
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
]