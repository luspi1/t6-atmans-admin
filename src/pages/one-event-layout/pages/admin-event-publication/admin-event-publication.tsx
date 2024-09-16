import { type FC, useEffect } from 'react'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { useActions } from 'src/hooks/actions/actions'

export const AdminEventPublication: FC = () => {
	const { setAdminTitle } = useActions()

	useEffect(() => {
		setAdminTitle('Публикация')
		return () => {
			setAdminTitle(null)
		}
	}, [])

	return <AdminContent>Публикация контент</AdminContent>
}
