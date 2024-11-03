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
                name: 'doc',
                type: 'upload',
                label: 'Документ',
                relationTo: 'files',
                required: true,
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