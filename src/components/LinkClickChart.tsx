'use client'

import axios from 'axios'
import moment from 'moment'
import { useDocumentInfo } from 'payload/dist/admin/components/utilities/DocumentInfo'
import React, { FC, useState, useEffect } from 'react'
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts'

const LinkClickChart: FC = () => {
	const { id } = useDocumentInfo()
	const [dateRange, setDateRange] = useState<string>('7days')

	const [linkClickData, setLinkClickData] = useState<
		{ date: string; count: number }[]
	>([])

	useEffect(() => {
		;(async () => {
			try {
				let startDate
				let groupMode = 'daily '

				if (dateRange === '24hours') {
					startDate = moment().subtract(24, 'hours').toISOString()
					groupMode = 'hourly'
				} else if (dateRange === '7days') {
					startDate = moment().subtract(6, 'days').toISOString()
				} else {
					startDate = moment().subtract(29, 'days').toISOString()
				}

				const endDate = moment().toISOString()

				const res = await axios.get(
					`/api/trackedLinksClicks/getChartData/${id}?startDate=${startDate}&endDate=${endDate}&groupMode=${groupMode}`
				)

				const data = await res.data
				setLinkClickData(data)
			} catch (error) {
				console.error('Error fetching chart data:', error)
			}
		})()
	}, [dateRange])

	return (
		<>
			<h3>Сервис UTM-меток</h3>
			<select
				value={dateRange}
				onInput={e => setDateRange((e.target as any).value)}
				name='dateRange'
				id=''
			>
				<option value='24hours'>Последние 24 часа</option>
				<option value='7days'>7 дней</option>
				<option value='30days'>30 дней</option>
			</select>
			{linkClickData.length > 0 ? (
				<ResponsiveContainer width='100%' height={400}>
					<LineChart
						data={linkClickData.map((item: any) => ({
							...item,
							_id: moment(item.date, 'YYYY-MM-DD HH:00').format(
								'DD,MM,YYYY HH:mm'
							),
						}))}
						margin={{
							top: 20,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='date' />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line
							type='monotone'
							dataKey='count'
							name='Переходы'
							stroke='#8884d8'
						/>
					</LineChart>
				</ResponsiveContainer>
			) : (
				<div
					style={{
						color: 'white',
						width: '100%',
						textAlign: 'center',
						fontSize: 30,
					}}
				>
					Нету данных
				</div>
			)}
		</>
	)
}

export default LinkClickChart
