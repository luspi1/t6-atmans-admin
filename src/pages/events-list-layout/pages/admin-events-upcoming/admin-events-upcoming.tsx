import { type FC, useEffect } from 'react'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { useActions } from 'src/hooks/actions/actions'

export const AdminEventsUpcoming: FC = () => {
	const { setAdminTitle } = useActions()
	useEffect(() => {
		setAdminTitle('Предстоящие события')
		return () => {
			setAdminTitle(null)
		}
	}, [])
	return (
		<AdminContent $padding='25px 30px 35px'>
			<p>Контент предстоящих событий</p>
		</AdminContent>
	)
}
