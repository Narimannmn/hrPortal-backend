import { Block } from "payload/types";

export const InstallmentsToCredit: Block = {
  slug: "InstallmentsToCredit",
  labels: {
    singular: "Перевод рассрочки в кредит",
    plural: "Переводы рассрочки в кредит",
  },
  fields: [
    {
			name: 'interestRate',
			label: 'Процентная ставка',
			type: 'number',
			defaultValue: 3.33,
			required: true,
		},
  ],
};
