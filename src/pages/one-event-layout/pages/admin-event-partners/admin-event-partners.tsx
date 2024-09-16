import { type FC, useEffect } from 'react'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { useActions } from 'src/hooks/actions/actions'

export const AdminEventPartners: FC = () => {
	const { setAdminTitle } = useActions()

	useEffect(() => {
		setAdminTitle('Партнеры')
		return () => {
			setAdminTitle(null)
		}
	}, [])

	return <AdminContent>Партнеры контент</AdminContent>
}
