import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	articles: [],
	status: "",
	loading: false
}

export const articlesSlice = createSlice({
	name: 'articles',
	initialState,
	reducers: {
		addArticle: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.articles.push(action.payload)
		},
		deleteArticle: (state, action) => {
			state.articles.filter((article) => article.id !== action.payload.id)
		}
	},
})

// Action creators are generated for each case reducer function
export const { addArticle, deleteArticle } = articlesSlice.actions

export default articlesSlice.reducer;