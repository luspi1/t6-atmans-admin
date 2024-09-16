import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

import { TabNavigation } from 'src/components/tab-navigation/tab-navigation'
import { profileTabs } from 'src/pages/profile-layout/consts'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const ProfileLayout = () => {
	return (
		<>
			<Helmet>
				<title>Мой профиль</title>
			</Helmet>
			<div className={adminStyles.adminTitleTab}>
				<h1>Мой профиль</h1>
				<TabNavigation navItems={profileTabs} />
			</div>

			<Outlet />
		</>
	)
}
