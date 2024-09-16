import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminAddObject: FC = () => {
	return (
		<>
			<Helmet>
				<title>Добавить объект</title>
			</Helmet>
			<h1>Добавить объект</h1>
			<AdminContent>Добавить объект контент</AdminContent>
		</>
	)
}
