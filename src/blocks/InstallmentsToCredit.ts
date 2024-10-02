import { Block } from "payload/types";

export const InstallmentsToCredit: Block = {
  slug: "InstallmentsToCredit",
  labels: {
    singular: "Перевод рассрочки в кредит",
    plural: "Переводы рассрочки в кредит",
  },
  fields: [
    {
      name: "max_value",
      label: "Максимальная сумма рассрочки",
      type: "number",
      defaultValue: 3000000,
      required: true,
    },
    {
      name: "min_value",
      label: "Минимальная сумма рассрочки",
      type: "number",
      defaultValue: 0,
      required: true,
    },
    {
      name: "annualRate",
      label: "Годовая Процентная ставка (%)",
      type: "number",
      defaultValue: 32,
      required: true,
    },
    {
      name: "principalPercentage",
      label: "Процентная доля от основной суммы долга (%)",
      type: "number",
      defaultValue: 5,
      required: false,
    },
    {
      name: "montlyFee",
      label: "Коммиссия за каждый месяц ",
      type: "number",
      defaultValue: 1000,
      required: false,
    },
  ],
};
