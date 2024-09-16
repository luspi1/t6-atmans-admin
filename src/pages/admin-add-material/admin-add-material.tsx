import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminAddMaterial: FC = () => {
	return (
		<>
			<Helmet>
				<title>Добавить материал</title>
			</Helmet>
			<h1>Добавить материал</h1>
			<AdminContent>Добавить материал контент</AdminContent>
		</>
	)
}
