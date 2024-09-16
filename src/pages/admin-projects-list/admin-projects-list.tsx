import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminProjectsList: FC = () => {
	return (
		<>
			<Helmet>
				<title>Список проектов</title>
			</Helmet>
			<h1>Список проектов</h1>
			<AdminContent>Список проектов контент</AdminContent>
		</>
	)
}
