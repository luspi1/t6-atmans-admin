import { type FC, useEffect } from 'react'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { useActions } from 'src/hooks/actions/actions'

export const AdminEventsList: FC = () => {
	const { setAdminTitle } = useActions()
	useEffect(() => {
		setAdminTitle('Список событий')
		return () => {
			setAdminTitle(null)
		}
	}, [])
	return (
		<AdminContent $padding='25px 30px 35px'>
			<ul>
				<li>Событие 1</li>
				<li>Событие 2</li>
				<li>Событие 3</li>
				<li>Событие 4</li>
			</ul>
		</AdminContent>
	)
}
