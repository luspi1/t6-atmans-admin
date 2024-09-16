import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminParticipantsList: FC = () => {
	return (
		<>
			<Helmet>
				<title>Список участников</title>
			</Helmet>
			<h1>Список участников</h1>
			<AdminContent>Список участников контент</AdminContent>
		</>
	)
}
