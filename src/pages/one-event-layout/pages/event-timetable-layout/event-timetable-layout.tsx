import { Outlet } from 'react-router-dom'
import { useActions } from 'src/hooks/actions/actions'
import { useEffect } from 'react'

export const EventTimetableLayout = () => {
	const { setAdminTitle } = useActions()
	useEffect(() => {
		setAdminTitle('Расписание')
		return () => {
			setAdminTitle(null)
		}
	}, [])
	return <Outlet />
}
