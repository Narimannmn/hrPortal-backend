import { Block } from "payload/types";

const SliderHeroWithCardsBlock: Block = {
  slug: "SliderHeroWithCardsBlock",
  labels: {
    singular: "Слайдер Герой с Карточками",
    plural: "Слайдер Герой с Карточками",
  },
  fields: [
    {
      name: "list",
      label: "Список Слайдов",
      type: "array",
      fields: [
        {
          name: "title",
          label: "Заголовок",
          type: "group",
          fields: [
            {
              name: "labelKz",
              label: "Заголовок (Kz)",
              type: "text",
              required: false,
            },
            {
              name: "labelRu",
              label: "Заголовок (Ru)",
              type: "text",
              required: false,
            },
            {
              name: "labelEn",
              label: "Заголовок (En)",
              type: "text",
              required: false,
            },
          ],
        },
        {
          name: "subtitle",
          label: "Подзаголовок",
          type: "group",
          fields: [
            {
              name: "labelKz",
              label: "Подзаголовок (Kz)",
              type: "text",
              required: false,
            },
            {
              name: "labelRu",
              label: "Подзаголовок (Ru)",
              type: "text",
              required: false,
            },
            {
              name: "labelEn",
              label: "Подзаголовок (En)",
              type: "text",
              required: false,
            },
          ],
        },
        {
          name: "buttonText",
          label: "Текст кнопки",
          type: "group",
          fields: [
            {
              name: "labelKz",
              label: "Текст кнопки (Kz)",
              type: "text",
              required: false,
            },
            {
              name: "labelRu",
              label: "Текст кнопки (Ru)",
              type: "text",
              required: false,
            },
            {
              name: "labelEn",
              label: "Текст кнопки (En)",
              type: "text",
              required: false,
            },
          ],
        },
        {
          name: "linkType",
          label: "Тип ссылки",
          type: "select",
          options: [
            {
              label: "Страница",
              value: "page",
            },
            {
              label: "Произвольная ссылка",
              value: "custom",
            },
          ],
          required: false,
        },
        {
          name: "pageSlug",
          label: "Ссылка на страницу",
          type: "relationship",
          relationTo: "pages",
          admin: {
            condition: (_, siblingData) => siblingData.linkType === "page",
          },
        },
        {
          name: "customLink",
          label: "Произвольная ссылка",
          type: "text",
          admin: {
            condition: (_, siblingData) => siblingData.linkType === "custom",
          },
        },
        {
          name: "imageUrl",
          label: "Ссылка на изображение",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "mobileImageUrl",
          label: "Ссылка на изображение (mobile)",
          type: "upload",
          relationTo: "media",
          required: false,
        },
      ],
    },
    {
      name: "cards",
      label: "Карточки",
      type: "array",
      minRows: 0,
      maxRows: 4,
      fields: [
        {
          name: "icon",
          label: "Иконка",
          type: "upload",
          relationTo: "icons",
          required: true,
        },
        {
          name: "cardTitle",
          label: "Заголовок карточки",
          type: "group",
          fields: [
            {
              name: "labelKz",
              label: "Заголовок карточки (Kz)",
              type: "text",
              required: true,
            },
            {
              name: "labelRu",
              label: "Заголовок карточки (Ru)",
              type: "text",
              required: true,
            },
            {
              name: "labelEn",
              label: "Заголовок карточки (En)",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "cardSubtitle",
          label: "Подзаголовок карточки",
          type: "group",
          fields: [
            {
              name: "labelKz",
              label: "Подзаголовок карточки (Kz)",
              type: "text",
              required: true,
            },
            {
              name: "labelRu",
              label: "Подзаголовок карточки (Ru)",
              type: "text",
              required: true,
            },
            {
              name: "labelEn",
              label: "Подзаголовок карточки (En)",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "linkType",
          label: "Тип ссылки",
          type: "select",
          options: [
            {
              label: "Страница",
              value: "page",
            },
            {
              label: "Произвольная ссылка",
              value: "custom",
            },
          ],
          required: true,
        },
        {
          name: "pageSlug",
          label: "Ссылка на страницу",
          type: "relationship",
          relationTo: "pages",
          admin: {
            condition: (_, siblingData) => siblingData.linkType === "page",
          },
        },
        {
          name: "customLink",
          label: "Произвольная ссылка",
          type: "text",
          admin: {
            condition: (_, siblingData) => siblingData.linkType === "custom",
          },
        },
      ],
    },
  ],
};

export default SliderHeroWithCardsBlock;
