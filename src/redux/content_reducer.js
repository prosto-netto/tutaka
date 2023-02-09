import { apiCategory, apiRoll } from "../dal/apiRolls"
import { paginator } from "../paginator/paginator"

const SET_CATEGORY = 'SET_CATEGORY'
const SET_ROLL = 'SET_ROLL'
const SET_PAGES_COUNT = 'SET_PAGES_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

const initState = {
	category: null,
	roll: null,
	pagesCount: null,
	currentPage: 1,
	pagesGallery: null,
	pageButtonTitles: null
}

const contentReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_CATEGORY:
			return {
				...state,
				category: action.category
			}
		case SET_ROLL:
			return {
				...state,
				roll: { ...action.roll }
			}
		case SET_PAGES_COUNT:
			return {
				...state,
				pagesCount: action.count,
				pagesGallery: paginator(action.count),
				pageButtonTitles: action.titles
			}
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.pageNumber
			}

		default:
			return state
	}
}

const setCategory = category => ({ type: SET_CATEGORY, category })
const setRoll = roll => ({ type: SET_ROLL, roll })
const setPagesCount = (count, titles) => ({ type: SET_PAGES_COUNT, count, titles })
const setCurrentPage = (pageNumber = 1) => ({ type: SET_CURRENT_PAGE, pageNumber })

export const initContentPage = category => dispatch => {
	dispatch(setCategory(category))
	dispatch(setCurrentPage())
	apiCategory(category).then(result => {
		dispatch(setPagesCount(result.pagesCount, result.titles))
		dispatch(setRoll(result.roll))
	})
}

export const getRoll = (category, pageNumber) => dispatch => {

	dispatch(setCurrentPage(pageNumber))
	apiRoll(category, pageNumber).then(result => {
		dispatch(setRoll(result.roll))
	})
}

export default contentReducer