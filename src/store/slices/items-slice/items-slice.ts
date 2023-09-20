import { createSlice } from '@reduxjs/toolkit'
import { IItem } from '../../../types/items.types'

const initialItems: IItem[] = [
	{ label: 'test', id: Math.floor(Math.random() * 100000000) },
]

const initialState: { items: IItem[] | null; activeItem: IItem | null } = {
	items: initialItems,
	activeItem: initialItems.length > 0 ? initialItems[0] : null,
}

export const itemsSlice = createSlice({
	name: 'items',
	initialState,
	reducers: {
		setItems: (state, action) => {
			state.items = action.payload
			return state
		},
		setActiveItem: (state, action) => {
			state.activeItem = action.payload
			return state
		},
	},
})

export const { setActiveItem, setItems } = itemsSlice.actions
export default itemsSlice
