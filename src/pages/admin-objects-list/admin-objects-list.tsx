import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminObjectsList: FC = () => {
	return (
		<>
			<Helmet>
				<title>Список объектов</title>
			</Helmet>
			<h1>Список объектов</h1>
			<AdminContent>Список объектов контент</AdminContent>
		</>
	)
}
