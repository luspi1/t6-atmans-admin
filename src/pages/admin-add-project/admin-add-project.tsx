import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminAddProject: FC = () => {
	return (
		<>
			<Helmet>
				<title>Добавить проект</title>
			</Helmet>
			<h1>Добавить проект</h1>
			<AdminContent>Добавить проект контент</AdminContent>
		</>
	)
}
