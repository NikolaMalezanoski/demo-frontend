import axios from "axios";
import {url} from "../../utilities/config";
import {setToken, clearToken,} from "../../utilities/LocalStorageService";
import {
	REGISTER_USER,
	LOGIN_USER,
	LOADING_DATA,
	CLEAR_AUTH,
	ERROR_MESSAGE,
	LOAD_USER,
	AUTO_LOGIN,
	LOGOUT_USER
} from "../types";

export const registerUser = credentials => {
	return async (dispatch) => {

		dispatch({
			type: LOADING_DATA
		});

		try {

			const registeredUser = await axios.post(`${url}/oauth/register`, credentials);
			setToken(registeredUser.data.accessToken, registeredUser.data.refreshToken);

			dispatch({
				type: REGISTER_USER,
				success: "Успешна регистрација. Проверете го вашиот е-маил"
			});

			dispatch({
				type: CLEAR_AUTH
			});

		} catch (err) {
			console.log(err.response);

			dispatch({
				type: ERROR_MESSAGE,
				payload: err.response.data.errors.email
			});

			setTimeout(() => {
				dispatch({
					type: CLEAR_AUTH
				}, 500)
			});
		}
	}
};

export const loginUser = credentials => {
	return async (dispatch) => {

		dispatch({
			type: LOADING_DATA
		});

		try {

			const loggedUser = await axios.post(`${url}/oauth/login`, credentials);
			setToken(loggedUser.data.accessToken, loggedUser.data.refreshToken);

			dispatch({
				type: LOGIN_USER
			});

			setTimeout(() => {
				dispatch({
					type: CLEAR_AUTH
				}, 500)
			});

		} catch (err) {
			console.error(err);

			dispatch({
				type: ERROR_MESSAGE,
				payload: "Во моментов се соочуваме со проблем. Пробајте подоцна"
			});

			setTimeout(() => {
				dispatch({
					type: CLEAR_AUTH
				})
			}, 1000);
		}

	}
};

export const loadPersonalDetails = () => {
	return async (dispatch) => {
		try {

			const loadedDetails = await axios.get(`${url}/client/personal-details`);
			console.log(loadedDetails);

			dispatch({
				type: LOAD_USER,
				payload: loadedDetails.data
			})
		} catch (err) {
			console.error(err)
		}
	}
};

export const getCategories = () => {
	return async (dispatch) => {
		try {

			// const categories = await fetch(`${url}/categories`);
			// const json = await categories.json();
			//
			// console.log(json);
			// console.log(categories);

			console.log(`${url}/categories`);

			const token = localStorage.getItem("access_token");
			console.log(token);
			const loadedDetails = await axios.get(`${url}/categories`, {
				headers: {
					Authorization: 'Bearer ' + token
				}
			});

			console.log(loadedDetails);


		} catch (err) {
			console.error(err)
		}
	}
};

export const autoLogIn = () => {
	return (dispatch) => {
		try {

			dispatch({
				type: AUTO_LOGIN
			});

		} catch (err) {
			console.err(err)
		}
	}
};

export const logOut = () => {
	return (dispatch) => {
		clearToken();
		dispatch({
			type: LOGOUT_USER
		})
	}
};

