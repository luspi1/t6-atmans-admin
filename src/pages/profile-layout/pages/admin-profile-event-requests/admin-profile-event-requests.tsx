import { type FC } from 'react'
import { type EventRequest } from 'src/types/events'

import { AdminContent } from 'src/components/admin-content/admin-content'

import { mainFormatDate } from 'src/helpers/utils'
import { Loader } from 'src/components/loader/loader'
import { CustomTable } from 'src/components/custom-table/custom-table'
import { Pagination } from 'src/components/pagination/pagination'
import { useGetEventRequestsQuery } from 'src/store/events/events.api'
import { EventReqFiltration } from 'src/pages/profile-layout/pages/admin-profile-event-requests/components/eventReqFiltration/eventReqFiltration'

import styles from './index.module.scss'

export const AdminProfileEventRequests: FC = () => {
	const { data: requestsList, isLoading } = useGetEventRequestsQuery(null)

	const tableTitles = [
		'Наименование события',
		'Тип события',
		'Начало',
		'Окончание',
		'Место проведения',
	]

	const formatRequestsTableData = (requestsData: EventRequest[]) => {
		return requestsData.map((newsEl) => {
			return [
				<p key='0'>{newsEl.title}</p>,
				newsEl.type,
				mainFormatDate(newsEl.dateStart),
				mainFormatDate(newsEl.dateEnd),
				newsEl.location,
			]
		})
	}

	if (isLoading || !requestsList) return <Loader />

	return (
		<AdminContent $padding='30px 0 60px 0'>
			<div className={styles.reqTitleWrapper}>
				<h3>Заявки на события</h3>
				<EventReqFiltration />
			</div>
			<CustomTable
				className={styles.requestsTable}
				cellsData={formatRequestsTableData(requestsList)}
				colTitles={tableTitles}
			/>
			<Pagination pagesCount={5} activePage={1} />
		</AdminContent>
	)
}
