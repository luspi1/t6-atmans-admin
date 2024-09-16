import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminProductList: FC = () => {
	return (
		<>
			<Helmet>
				<title>Список товаров</title>
			</Helmet>
			<h1>Список товаров</h1>
			<AdminContent>Список товаров контент</AdminContent>
		</>
	)
}
