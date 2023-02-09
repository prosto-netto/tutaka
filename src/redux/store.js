import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import contentReducer from './content_reducer';
import sidebarReducer from './sidebar_reducer';

const mainReducer = combineReducers(
	{
		sidebar: sidebarReducer,
		content: contentReducer
	}
)

export const store = createStore(mainReducer, applyMiddleware(thunkMiddleWare))