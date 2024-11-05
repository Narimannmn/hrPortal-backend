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
                name: 'doc',
                type: 'upload',
                label: 'Документ',
                relationTo: 'files',
                required: true,
            },
        ],
    }
]