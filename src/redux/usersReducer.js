import { usersAPI } from "../api/samurai"
import { paginator } from "../paginator/paginator"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_PAGES_COUNT = 'SET_TOTAL_PAGES_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const PAGES_GALLERY = 'PAGES_GALLERY'
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS'



const initialState = {
	users: [],
	currentPage: 1,
	pageSize: 5,
	totalPagesCount: 0,
	totalUsersCount: 0,
	pagesGallery: [],
	isFetching: false,
	isFollowingProgress: []
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return ({
				...state,
				users: state.users.map(user => {
					if (user.id === action.userID) {
						return ({ ...user, followed: true })
					}
					return user
				})
			})

		case UNFOLLOW:
			return ({
				...state,
				users: state.users.map(user => {
					if (user.id === action.userID) {
						return ({ ...user, followed: false })
					}
					return user
				})
			})

		case SET_USERS:
			return (
				{
					...state,
					users: [...action.users]
				}
			)

		case SET_TOTAL_USERS_COUNT:
			return (
				{
					...state,
					totalUsersCount: action.count
				}
			)

		case SET_CURRENT_PAGE:
			return (
				{
					...state,
					currentPage: action.currentPage
				}
			)

		case SET_TOTAL_PAGES_COUNT:
			return (
				{
					...state,
					totalPagesCount: action.count
				}
			)

		case TOGGLE_IS_FETCHING:
			return (
				{
					...state,
					isFetching: action.isFetching
				}
			)

		case PAGES_GALLERY:
			return (
				{
					...state,
					pagesGallery: paginator(action.currentPage, state.totalPagesCount)
				}
			)

		case TOGGLE_FOLLOWING_PROGRESS:
			return (
				{
					...state,
					isFollowingProgress: action.isFetching
						? [...state.isFollowingProgress, action.userID]
						: state.isFollowingProgress.filter(id => id !== action.userID)
				}
			)

		default:
			return state
	}
}

const follow = userID => ({ type: FOLLOW, userID })

const unfollow = userID => ({ type: UNFOLLOW, userID })

const setUsers = users => ({ type: SET_USERS, users })

const setTotalUsersCount = count => ({ type: SET_TOTAL_USERS_COUNT, count })

const setCurrentPage = (currentPage = 1) => ({ type: SET_CURRENT_PAGE, currentPage })

const setTotalPagesCount = count => ({ type: SET_TOTAL_PAGES_COUNT, count })

const setIsFetching = isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching })

const setPagesGallery = (currentPage = 1) => ({ type: PAGES_GALLERY, currentPage })

const setIsFollowingProgress = (isFetching, userID) => ({ type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userID })


export const getUsers = (page, count) => dispatch => {
	dispatch(setIsFetching(true))
	dispatch(setPagesGallery(page))
	usersAPI.getUsers(page, count)
		.then(response => {
			let { items, totalCount } = response.data
			dispatch(setTotalUsersCount(totalCount))
			dispatch(setTotalPagesCount(Math.ceil(totalCount / count)))
			dispatch(setUsers(items))
			dispatch(setIsFetching(false))
		})
}

export const getUsersOnPageChanged = (page, count) => dispatch => {
	dispatch(setIsFetching(true))
	dispatch(setCurrentPage(page))
	dispatch(setPagesGallery(page))
	usersAPI.getUsers(page, count)
		.then(response => {
			dispatch(setUsers(response.data.items))
			dispatch(setIsFetching(false))
		})
}

export const unfollowIntent = userID => dispatch => {
	dispatch(setIsFollowingProgress(true, userID))
	usersAPI.unfollow(userID)
		.then(response => {
			if (response.resultCode === 0) dispatch(unfollow(userID))
			dispatch(setIsFollowingProgress(false, userID))
		})
}

export const followIntent = userID => dispatch => {
	dispatch(setIsFollowingProgress(true, userID))
	usersAPI.follow(userID)
		.then(response => {
			if (response.resultCode === 0) dispatch(follow(userID))
			dispatch(setIsFollowingProgress(false, userID))
		})
}


export default usersReducer