import { XMLParser } from 'fast-xml-parser'
import fs from 'fs'
import payload from 'payload'
import sharp from 'sharp'

async function validateAndProcessImage(buffer) {
	try {
		return await sharp(buffer).toBuffer()
	} catch (error) {
		console.error('Ошибка обработки изображения:', error)
		throw new Error('Некорректный формат изображения')
	}
}

function getMimeType(filename: string) {
	const extension = filename.split('.').pop().toLowerCase()

	const mimeTypes = {
		html: 'text/html',
		htm: 'text/html',
		css: 'text/css',
		js: 'application/javascript',
		json: 'application/json',
		png: 'image/png',
		jpg: 'image/jpeg',
		jpeg: 'image/jpeg',
		gif: 'image/gif',
		svg: 'image/svg+xml',
		pdf: 'application/pdf',
		zip: 'application/zip',
		txt: 'text/plain',
		xml: 'application/xml',
		mp4: 'video/mp4',
		mp3: 'audio/mpeg',
		wav: 'audio/wav',
		ico: 'image/x-icon',
	}

	return mimeTypes[extension] || 'application/octet-stream'
}

export const mediaMigration = async () => {
	const xmlData = fs.readFileSync('./media.xml', 'utf8')

	const parser = new XMLParser()
	const wpData = parser.parse(xmlData)

	for (const mediaItem of wpData.rss.channel.item) {
		const res = await fetch(mediaItem.guid)
		if (!res.ok) {
			console.log(`Skipping ${mediaItem.guid}, failed to fetch`)
			continue
		}
		const arrayBuffer = await res.arrayBuffer()
		const buffer = Buffer.from(new Uint8Array(arrayBuffer))
		if (
			mediaItem.guid.includes('jpg') ||
			mediaItem.guid.includes('jpeg') ||
			mediaItem.guid.includes('png') ||
			mediaItem.guid.includes('gif')
		) {
			try {
				await payload.create({
					collection: 'marketplace-media',
					data: {
						alt: mediaItem.title.toString(),
					},
					file: {
						data: await validateAndProcessImage(buffer),
						mimetype: getMimeType(mediaItem.guid),
						name: mediaItem.guid.split('?')[0].split('/').pop(),
						size: buffer.length,
					},
				})
			} catch (error) {
				console.error(`Ошибка при загрузке ${mediaItem.guid}:`, error)
			}
		}
	}
}
