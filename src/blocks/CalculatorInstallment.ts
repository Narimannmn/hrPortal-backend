import { Block } from "payload/types";

export const CalculatorInstallment: Block = {
  slug: "CalculatorInstallment",
  labels: {
    singular: "Калькулятор Рассрочки в магазине",
    plural: "Калькуляторы Рассрочки в магазине",
  },
  fields: [
    {
      name: "tabs",
      label: "Табы калькулятора",
      type: "array",
      fields: [
        {
          name: "labels",
          label: "Название таба",
          type: "group",
          fields: [
            {
              name: "labelKz",
              label: "Название таба на казахском",
              type: "text",
              required: true,
            },
            {
              name: "labelEn",
              label: "Название таба на английском",
              type: "text",
              required: true,
            },
            {
              name: "labelRu",
              label: "Название таба на русском",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "checkboxLabel",
          label: "Описание условия checkbox",
          type: "group",
          fields: [
            {
              name: "labelRu",
              label: "Описание (Рус)",
              type: "text",
              required: true,
            },
            {
              name: "labelEn",
              label: "Описание (En)",
              type: "text",
              required: true,
            },
            {
              name: "labelKz",
              label: "Описание (Қаз)",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "minValue",
          label: "Минимальная сумма",
          type: "number",
          required: true,
        },
        {
          name: "maxValue",
          label: "Максимальная сумма",
          type: "number",
          required: true,
        },
        {
          name: "commissionTitle",
          label: "Заголовок описание комиссии",
          type: "group",
          fields: [
            {
              name: "labelRu",
              label: "Описание (Рус)",
              type: "text",
              required: false,
            },
            {
              name: "labelEn",
              label: "Описание (En)",
              type: "text",
              required: false,
            },
            {
              name: "labelKz",
              label: "Описание (Қаз)",
              type: "text",
              required: false,
            },
          ],
        },
        {
          name: "commissionDescription",
          label: "Описание комиссии",
          type: "group",
          fields: [
            {
              name: "labelRu",
              label: "Описание (Рус)",
              type: "text",
              required: false,
            },
            {
              name: "labelEn",
              label: "Описание (En)",
              type: "text",
              required: false,
            },
            {
              name: "labelKz",
              label: "Описание (Қаз)",
              type: "text",
              required: false,
            },
          ],
        },
        {
          name: "commission",
          label: "Комиссия за снятие (%)",
          type: "number",
          required: true,
        },
        {
          name: "fixedFee",
          label: "Дополнительная комиссия за снятие (₸)",
          type: "number",
          required: false,
        },
        {
          name: "additionalInfoTitle",
          label: "Дополнительная информация заголовок",
          type: "group",
          fields: [
            {
              name: "labelRu",
              label: "Описание (Рус)",
              type: "text",
              required: false,
            },
            {
              name: "labelEn",
              label: "Описание (En)",
              type: "text",
              required: false,
            },
            {
              name: "labelKz",
              label: "Описание (Қаз)",
              type: "text",
              required: false,
            },
          ],
        },
        {
          name: "additionalInfoText",
          label: "Дополнительная информация текст",
          type: "group",
          fields: [
            {
              name: "labelRu",
              label: "Описание (Рус)",
              type: "text",
              required: false,
            },
            {
              name: "labelEn",
              label: "Описание (En)",
              type: "text",
              required: false,
            },
            {
              name: "labelKz",
              label: "Описание (Қаз)",
              type: "text",
              required: false,
            },
          ],
        },
        {
          name: "period",
          label: "Срок рассрочки (в месяцах)",
          type: "number",
          required: false,
        },
        {
          name: "annualRate",
          label: "Ежедневная процентная ставка (%)",
          type: "number",
          defaultValue: 0.09,
          required: false,
        },
      ],
    },
  ],
};
