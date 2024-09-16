import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminDepartmentsList: FC = () => {
	return (
		<>
			<Helmet>
				<title>Список отделений</title>
			</Helmet>
			<h1>Список отделений</h1>
			<AdminContent>Список отделений контент</AdminContent>
		</>
	)
}
