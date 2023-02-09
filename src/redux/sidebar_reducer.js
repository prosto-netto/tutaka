import { apiLinks } from '../dal/apiRolls'

const SET_LINKS = 'SET_LINKS';
const SET_ACTIVE_LINK = 'SET_ACTIVE_LINK'

const initState = {
	links: null,
	activeLink: null
}

const sidebarReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_LINKS:
			return {
				...state,
				links: [...action.links]
			}
		case SET_ACTIVE_LINK:
			return {
				...state,
				activeLink: action.linkID
			}
		default:
			return state
	}
}

const setLinks = links => ({ type: SET_LINKS, links })
export const setActiveLink = linkID => ({ type: SET_ACTIVE_LINK, linkID })

export const getLinks = () => dispatch => (
	apiLinks().then(links => dispatch(setLinks(links)))
)

export default sidebarReducer