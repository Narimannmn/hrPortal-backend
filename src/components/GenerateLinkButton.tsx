import { useField } from 'payload/components/forms'
import React from 'react'

const GenerateLinkButton: React.FC = () => {
	const hrefField = useField<string>({ path: 'link' })
	const utm_source = useField<string>({ path: 'utm.utm_source' })
	const utm_medium = useField<string>({ path: 'utm.utm_medium' })
	const utm_campaign = useField<string>({ path: 'utm.utm_campaign' })
	const utm_content = useField<string>({ path: 'utm.utm_content' })
	const utm_term = useField<string>({ path: 'utm.utm_term' })
	const slug = useField<string>({ path: 'slug' })

	const utm = {
		utm_source: utm_source.value,
		utm_medium: utm_medium.value,
		utm_campaign: utm_campaign.value,
		utm_content: utm_content.value,
		utm_term: utm_term.value,
	}

	const generatedLinkField = useField<string>({ path: 'href' })

	const isValidUrl = urlString => {
		try {
			const url = new URL(urlString)
			return url.protocol === 'http:' || url.protocol === 'https:'
		} catch (e) {
			return false
		}
	}

	const copyTextToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(
				'https://eub-web03-lt1.eub.kz/utms/' + slug.value
			)
			console.log('Текст успешно скопирован в буфер обмена!')
		} catch (err) {
			console.error('Ошибка:', err)
		}
	}

	const handleGenerateLink = () => {
		if (!isValidUrl(hrefField.value)) {
			alert('Адрес вашей страницы, оно должно быть валидным URL-адресом')
			return
		}

		const href = hrefField.value

		if (href && utm) {
			const { utm_source, utm_medium, utm_campaign, utm_content, utm_term } =
				utm
			const params = new URLSearchParams()

			if (utm_source) params.append('utm_source', utm_source)
			if (utm_medium) params.append('utm_medium', utm_medium)
			if (utm_campaign) params.append('utm_campaign', utm_campaign)
			if (utm_content) params.append('utm_content', utm_content)
			if (utm_term) params.append('utm_term', utm_term)

			const generatedLink = `${href}?${params.toString()}`

			generatedLinkField.setValue(generatedLink)
		}
	}

	return (
		<div
			style={{
				display: 'flex',
				gap: '10px',
			}}
		>
			<button
				className='btn btn--style-primary btn--icon-style-without-border btn--size-small btn--icon-position-right'
				type='button'
				onClick={handleGenerateLink}
			>
				Сгенерировать ссылку
			</button>
			<button
				className='btn btn--style-primary btn--icon-style-without-border btn--size-small btn--icon-position-right'
				type='button'
				onClick={copyTextToClipboard}
			>
				Скопировать ссылку
			</button>
		</div>
	)
}

export default GenerateLinkButton
