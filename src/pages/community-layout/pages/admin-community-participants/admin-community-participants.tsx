import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const AdminCommunityParticipants: FC = () => {
	return (
		<>
			<Helmet>
				<title>Участники</title>
			</Helmet>
			<AdminContent $padding='30px 30px 35px'>
				<AdminButton
					className={adminStyles.adminViewPageLink}
					as='link'
					to='/'
					$margin='0 0 29px 0'
					$outlined
				>
					Посмотреть страницу на сайте
				</AdminButton>
				страница участников
			</AdminContent>
		</>
	)
}
