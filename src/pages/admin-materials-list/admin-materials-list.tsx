import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminMaterialsList: FC = () => {
	return (
		<>
			<Helmet>
				<title>Список материалов</title>
			</Helmet>
			<h1>Список материалов</h1>
			<AdminContent>Список материалов контент</AdminContent>
		</>
	)
}
