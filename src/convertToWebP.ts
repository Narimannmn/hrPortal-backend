import AWS from 'aws-sdk'
import sharp from 'sharp'
import { Readable } from 'stream'

// Инициализируем S3 клиент
const s3 = new AWS.S3({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	region: process.env.AWS_REGION,
})

const BUCKET_NAME = process.env.S3_BUCKET_NAME

// Функция для получения списка всех файлов в S3
async function listAllObjects(marker) {
	const params = {
		Bucket: BUCKET_NAME,
		Marker: marker,
	}

	const data = await s3.listObjects(params).promise()
	return data.Contents
}

// Функция для загрузки файла с S3
async function downloadFileFromS3(key) {
	const params = {
		Bucket: BUCKET_NAME,
		Key: key,
	}

	const data = await s3.getObject(params).promise()
	const body = data.Body

	// Если Body является потоком (Readable), преобразуем его в Buffer
	if (body instanceof Readable) {
		return streamToBuffer(body)
	}

	// Если Body уже является Buffer, возвращаем его напрямую
	if (Buffer.isBuffer(body)) {
		return body
	} else if (body instanceof Uint8Array) {
		return Buffer.from(body)
	} else {
		return Buffer.from(body as string)
	}
}

// Функция для конвертации потока в Buffer
function streamToBuffer(stream) {
	return new Promise((resolve, reject) => {
		const chunks = []
		stream.on('data', chunk => chunks.push(chunk))
		stream.on('end', () => resolve(Buffer.concat(chunks)))
		stream.on('error', reject)
	})
}

// Функция для загрузки файла обратно в S3
async function uploadFileToS3(key, buffer, mimeType) {
	const params = {
		Bucket: BUCKET_NAME,
		Key: key,
		Body: buffer,
		ContentType: mimeType,
		ACL: 'public-read', // Опционально, для публичного доступа
	}

	await s3.upload(params).promise()
}

// Основная функция для конвертации изображений в WebP
async function convertImagesToWebP() {
	try {
		let marker = null
		let objects

		do {
			objects = await listAllObjects(marker)
			for (const object of objects) {
				const { Key } = object

				// Проверяем, является ли файл изображением
				if (/\.(jpe?g|png)$/i.test(Key)) {
					console.log(`Converting ${Key} to WebP`)

					// Скачиваем изображение
					const imageBuffer = await downloadFileFromS3(Key)

					// Конвертируем в WebP
					const webpBuffer = await sharp(imageBuffer).webp().toBuffer()

					// Генерируем новое имя файла с расширением .webp
					const newKey = Key.replace(/\.\w+$/, '.webp')

					// Загружаем обратно в S3
					await uploadFileToS3(newKey, webpBuffer, 'image/webp')

					console.log(`Uploaded ${newKey}`)
				}
			}

			marker = objects.length > 0 ? objects[objects.length - 1].Key : null
		} while (objects.length > 0)

		console.log('All images converted to WebP!')
	} catch (error) {
		console.error('Error converting images:', error)
	}
}

export default convertImagesToWebP
