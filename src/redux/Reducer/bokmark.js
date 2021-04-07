import * as ActionTypes from "../ActionTypes";

export const bookmarks = (
	state = { bookmarks: ["h"], errMess: null, loading: null },
	action
) => {
	switch (action.type) {
		case ActionTypes.ADD_BOOKMARK:
			return {
				...state,
				bookmarks: [...state.bookmarks, action.payload],
			};

		default:
			return state;
	}
};
