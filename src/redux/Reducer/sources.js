import * as ActionTypes from "../ActionTypes";

export const sources = (
	state = { sources: [], errMess: null, loading: null },
	action
) => {
	switch (action.type) {
		case ActionTypes.SOURCES_LOADING:
			return {
				...state,
				loading: true,
			};

		case ActionTypes.FETCH_SOURCES:
			console.log(action.payload);
			return {
				...state,
				sources: action.payload,
				loading: false,
				errMess: null,
			};
		case ActionTypes.SOURCES_FAILED:
			return {
				...state,
				errMess: action.payload,
				loading: false,
			};

		default:
			return state;
	}
};
