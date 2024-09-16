import { type FC, useEffect } from 'react'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { useActions } from 'src/hooks/actions/actions'

export const AdminProfileTransport: FC = () => {
	const { setAdminTitle } = useActions()
	useEffect(() => {
		setAdminTitle('Транспорт пользователя')
		return () => {
			setAdminTitle(null)
		}
	}, [])
	return (
		<AdminContent $padding='25px 30px 35px'>
			<p>Контент транспорт пользователя</p>
		</AdminContent>
	)
}
