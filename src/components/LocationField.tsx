import L from 'leaflet'
import React, { useEffect, useRef } from 'react'

const LocationField = ({ value, onChange }) => {
	const mapRef = useRef(null)

	useEffect(() => {
		const map = L.map(mapRef.current).setView(
			[value?.latitude || 51.505, value?.longitude || -0.09],
			13
		)

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
		}).addTo(map)

		const marker = L.marker([
			value?.latitude || 51.505,
			value?.longitude || -0.09,
		]).addTo(map)

		map.on('click', e => {
			const { lat, lng } = e.latlng
			marker.setLatLng([lat, lng])
			onChange({ latitude: lat, longitude: lng })
		})

		return () => {
			map.off()
			map.remove()
		}
	}, [onChange, value])

	return <div ref={mapRef} style={{ height: '400px', width: '100%' }} />
}

export default LocationField
