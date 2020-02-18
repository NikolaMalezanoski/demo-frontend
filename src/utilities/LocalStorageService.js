import axios from "axios";
import {url} from "../utilities/config";

export const setToken = (access_token, refresh_token) => {
	return (
		localStorage.setItem("access_token", access_token),
			localStorage.setItem("refresh_token", refresh_token)
	)
};

export const getAccessToken = () => {
	return localStorage.getItem("access_token")
};

export const getRefreshToken = () => {
	return localStorage.getItem("refresh_token");
};

export const clearToken = () => {
	localStorage.removeItem("access_token");
	localStorage.removeItem("refresh_token");
};

export const requestInterceptor = () => {
	return (
		axios.interceptors.request.use(
			config => {
				const token = getAccessToken();

				if (token) {
					config.headers['Authorization'] = `Bearer ${token}`;
				}

				config.headers['Content-Type'] = 'application/json';

				return config;
			},
			error => {
				Promise.reject(error)
			})
	)
};

export const responseInterceptor = (props) => {
	return axios.interceptors.response.use((response) => {
			return response
		}, function (error) {

			const originalRequest = error.config;

			if (error.response.status !== 401) {
				return Promise.reject(error);
			} else if (error.response.status === 401 && !originalRequest._retry) {

				originalRequest._retry = true;

				const refreshToken = getRefreshToken();

				return axios.post(`${url}/oauth/refresh-token`, {refreshToken: refreshToken})
					.then(response => {
						console.log(response);
						if (response.status === 201) {

							setToken(response.data.accessToken, response.data.refreshToken);
							axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
							originalRequest.headers['Authorization'] = `Bearer ${response.data.accessToken}`;

							return axios(originalRequest);
						}
					});
			}

			return Promise.reject(error);
		}
	)
};


