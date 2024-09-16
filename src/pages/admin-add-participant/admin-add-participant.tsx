import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminAddParticipant: FC = () => {
	return (
		<>
			<Helmet>
				<title>Добавить участника</title>
			</Helmet>
			<h1>Добавить участника</h1>
			<AdminContent>Добавить участника контент</AdminContent>
		</>
	)
}
