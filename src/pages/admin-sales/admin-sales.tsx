import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminSales: FC = () => {
	return (
		<>
			<Helmet>
				<title>Продажи</title>
			</Helmet>
			<h1>Продажи</h1>
			<AdminContent>Продажи контент</AdminContent>
		</>
	)
}
