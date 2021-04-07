import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import ReduxThunk from "redux-thunk";
import { logger } from "redux-logger";
import { news } from "./Reducer/news";
import { sources } from "./Reducer/sources";
import { bookmarks } from "./Reducer/bokmark";
const initialState = {};
const reducer = combineReducers({
	news: news,
	sources,
	bookmarks,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const ConfigureStore = () => {
	const store = createStore(
		reducer,
		initialState,
		composeEnhancers(applyMiddleware(ReduxThunk, logger))
	);

	return store;
};
