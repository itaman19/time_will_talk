import { apikey } from "../apikey";
import * as ActionTypes from "./ActionTypes";
export const fetchNews = (url) => (dispatch) => {
	dispatch({ type: ActionTypes.NEWS_LOADING });
	return fetch(url)
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					var error = new Error(
						"Error " + response.status + ": " + response.statusText
					);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				var errmess = new Error(error.message);
				throw errmess;
			}
		)
		.then((response) => response.json())
		.then((news) => {
			console.log(news.articles);
			dispatch({
				type: ActionTypes.FETCH_NEWS,
				payload: news.articles,
			});
		})
		.catch((error) =>
			dispatch({
				type: ActionTypes.NEWS_FAILED,
				payload: error.message,
			})
		);
};

export const fetchSources = () => (dispatch) => {
	dispatch({ type: ActionTypes.SOURCES_LOADING });
	return fetch(`https://newsapi.org/v2/sources?apiKey=${apikey}`)
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					var error = new Error(
						"Error " + response.status + ": " + response.statusText
					);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				var errmess = new Error(error.message);
				throw errmess;
			}
		)
		.then((response) => response.json())
		.then((news) => {
			console.log(news.sources);
			dispatch({
				type: ActionTypes.FETCH_SOURCES,
				payload: news.sources,
			});
		})
		.catch((error) =>
			dispatch({
				type: ActionTypes.SOURCES_FAILED,
				payload: error.message,
			})
		);
};

export const addBookmark = (url, name) => (dispatch) => {
	dispatch({
		type: ActionTypes.ADD_BOOKMARK,
		payload: { url, name },
	});
};
