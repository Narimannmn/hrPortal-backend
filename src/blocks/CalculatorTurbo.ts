import { Block } from "payload/types";

export const CalculatorTurbo: Block = {
  slug: "CalculatorTurbo",
  labels: {
    singular: "Калькулятор Turbo deposit",
    plural: "Калькуляторы Turbo deposit",
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
          name: "minValueDeposit",
          label: "Минимальная сумма депозита",
          type: "number",
          required: true,
        },
        {
            name: "minValue",
            label: "Минимальная сумма пополнения",
            type: "number",
            required: true,
          },
        {
          name: "rewardRate",
          label: "Ставка вознаграждения (%)",
          type: "number",
          required: true,
        },
        {
            name: "effectiveRate",
            label: "Эффективная ставка (ГЭСВ) (%)",
            type: "number",
            required: true,
          },
      ],
    },
  ],
};
