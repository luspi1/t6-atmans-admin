import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'
import { useAppSelector } from 'src/hooks/store'

import { TabNavigation } from 'src/components/tab-navigation/tab-navigation'
import { oneEventTabs } from 'src/pages/one-event-layout/consts'
import { getAdminTitle } from 'src/modules/admin-title/store/admin-title.selectors'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
export const OneEventLayout = () => {
	const mainTitle = useAppSelector(getAdminTitle)

	return (
		<>
			<Helmet>
				<title>{mainTitle ?? 'События'}</title>
			</Helmet>
			<div className={adminStyles.adminTitleTab}>
				<h1>{mainTitle ?? 'События'}</h1>
				<TabNavigation navItems={oneEventTabs} />
			</div>

			<Outlet />
		</>
	)
}
