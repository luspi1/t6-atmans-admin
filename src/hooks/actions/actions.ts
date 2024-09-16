import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { adminTitleActions } from 'src/modules/admin-title/store/admin-title.slice'

const actions = {
	...adminTitleActions,
}
export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}
