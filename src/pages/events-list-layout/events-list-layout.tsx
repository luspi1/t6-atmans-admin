import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

import { TabNavigation } from 'src/components/tab-navigation/tab-navigation'
import { getAdminTitle } from 'src/modules/admin-title/store/admin-title.selectors'
import { useAppSelector } from 'src/hooks/store'
import { eventsListTabs } from 'src/pages/events-list-layout/consts'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const EventsListLayout = () => {
	const mainTitle = useAppSelector(getAdminTitle)

	return (
		<>
			<Helmet>
				<title>{mainTitle ?? 'Список событий'}</title>
			</Helmet>
			<div className={adminStyles.adminTitleTab}>
				<h1>{mainTitle ?? 'Список событий'}</h1>
				<TabNavigation navItems={eventsListTabs} />
			</div>

			<Outlet />
		</>
	)
}
