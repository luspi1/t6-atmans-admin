import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { NameSpace } from 'src/helpers/consts'

type AdminTitleState = {
	title: string | null
}

const initialState: AdminTitleState = {
	title: null,
}

export const adminTitleSlice = createSlice({
	name: NameSpace.AdminTitle,
	initialState,
	reducers: {
		setAdminTitle: (state, action: PayloadAction<string | null>) => {
			state.title = action.payload
		},
	},
})

export const adminTitleActions = adminTitleSlice.actions
export const adminTitleReducer = adminTitleSlice.reducer
