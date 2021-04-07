import * as ActionTypes from "../ActionTypes";

export const news = (
	state = { news: [], errMess: null, loading: null },
	action
) => {
	switch (action.type) {
		case ActionTypes.NEWS_LOADING:
			return {
				...state,
				loading: true,
			};

		case ActionTypes.FETCH_NEWS:
			console.log(action.payload);
			return {
				...state,
				news: action.payload,
				loading: false,
				errMess: null,
			};
		case ActionTypes.NEWS_FAILED:
			return {
				...state,
				errMess: action.payload,
				loading: false,
			};

		default:
			return state;
	}
};
