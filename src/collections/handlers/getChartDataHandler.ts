import moment from 'moment'
import payload from 'payload'

export default async function getChartDataHandler(req, res, next) {
	const groupMode = req.query.groupMode

	const trackedLinkId = req.params.trackedLinkId
	const startDate = req.query.startDate
	const endDate = req.query.endDate

	if (!req.user) {
		return res.status(401).json({ message: 'Unauthorized' })
	}

	try {
		const dateFilters: any = {}
		if (startDate) {
			dateFilters.gte = new Date(startDate)
		}
		if (endDate) {
			dateFilters.lte = new Date(endDate)
		}

		const result = await payload.find({
			collection: 'trackedLinksClicks',
			limit: 1000,
			where: {
				trackedLink: {
					equals: trackedLinkId || undefined,
				},
				...(startDate || endDate ? { createdAt: dateFilters } : {}),
			},
		})

		const groupedData = result.docs.reduce((acc, doc) => {
			if (groupMode === 'hourly') {
				const date = new Date(doc?.createdAt as string)
					.toISOString()
					.split('T')[0]
				const hour = new Date(doc?.createdAt as string)
					.toISOString()
					.split('T')[1]
					.split(':')[0]
				if (!acc[date]) acc[date] = {}
				if (!acc[date][hour]) acc[date][hour] = 0
				acc[date][hour] += 1
				return acc
			} else {
				const date = new Date(doc?.createdAt as string)
					.toISOString()
					.split('T')[0]
				if (!acc[date]) acc[date] = 0
				acc[date] += 1
				return acc
			}
		}, {})

		const finalResult = Object.keys(groupedData).map(date => ({
			date,
			count: groupedData[date],
		}))

		const momentStart = moment(startDate)
		const momentEnd = moment(endDate)

		const dateArray = []
		let currentDate = momentStart

		while (currentDate <= momentEnd) {
			if (groupMode === 'hourly') {
				dateArray
					.push(currentDate.toISOString(groupMode))
					.toString()
					.split('T')[0]
			} else {
				dateArray.push(currentDate.format('YYYY-MM-DD'))
			}
			currentDate =
				groupMode === 'hourly'
					? currentDate.add(1, 'hours')
					: (currentDate = currentDate.add(1, 'days'))
		}

		const mergeTwoArrays = dateArray.map(date => {
			const found = finalResult.find(element => element.date === date)
			return found || { date, count: 0 }
		})

		// const addUA = { ...mergeTwoArrays, ua: result.docs.map(doc => doc.ua) }

		res.status(200).json(mergeTwoArrays)
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Something went wrong', error })
	}
}
