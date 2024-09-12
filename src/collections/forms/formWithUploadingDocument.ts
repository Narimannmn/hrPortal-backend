import { CollectionConfig } from 'payload/types'

const FormWithUploadingDocument: CollectionConfig = {
	slug: 'form-with-uploading-document',
	labels: {
		singular: 'Заполненная форма с загрузкой документа',
		plural: 'Заполненные формы с загрузкой документа',
	},
	access: {
		read: () => true,
		create: () => true,
		update: () => true,
		delete: () => true,
	},
	admin: {
		useAsTitle: 'Заполненные формы с загрузкой документа',
		group: 'Заполненные формы',
		defaultColumns: [
			'guaranteeNumber',
			'date',
			'beneficiaryBin',
			'clientBin',
			'formNumber',
			'document',
			'phone',
			'email',
			'postalAddress',
		],
	},
	fields: [
		{
			name: 'guaranteeNumber',
			label: 'Номер гарантии',
			type: 'text',
			required: true,
		},
		{
			name: 'date',
			label: 'Дата',
			type: 'text',
			required: true,
		},
		{
			name: 'beneficiaryBin',
			label: 'БИН бенефицара',
			type: 'text',
			required: true,
		},
		{
			name: 'clientBin',
			label: 'БИН клиента',
			type: 'text',
			required: true,
		},
		{
			name: 'formNumber',
			label: 'Номер фирменного бланка',
			type: 'text',
			required: true,
		},
		{
			name: 'document',
			label: 'Документ',
			type: 'upload',
			relationTo: 'documents',
			required: true,
		},
		{
			name: 'phone',
			label: 'Мобильный телефон',
			type: 'text',
			required: true,
		},
		{
			name: 'email',
			label: 'Электронная почта',
			type: 'email',
			required: true,
		},
		{
			name: 'postalAddress',
			label: 'Почтовый адрес',
			type: 'text',
		},
	],
}

export default FormWithUploadingDocument
