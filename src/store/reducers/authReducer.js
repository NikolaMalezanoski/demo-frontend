import {
	REGISTER_USER,
	LOADING_DATA,
	LOGIN_USER,
	CLEAR_AUTH,
	ERROR_MESSAGE,
	AUTO_LOGIN,
	LOAD_USER,
	LOGOUT_USER
} from "../types";

const initialState = {
	isLoading: false,
	isAuthenticated: false,
	errorMessage: "",
	successMessage: "",
	userData: []
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case REGISTER_USER :
			return {
				...state,
				isLoading: false,
				successMessage: action.success,
				isAuthenticated: true
			};
		case LOGIN_USER :
			return {
				...state,
				isAuthenticated: true,
				isLoading: false
			};

		case CLEAR_AUTH :
			return {
				...state,
				isLoading: false,
				errorMessage: "",
				successMessage: ""
			};
		case LOADING_DATA :
			return {
				...state,
				isLoading: true
			};

		case LOAD_USER :
			return {
				...state,
				userData: action.payload
			};

		case ERROR_MESSAGE :
			return {
				...state,
				errorMessage: action.payload,
				isLoading: false
			};

		case AUTO_LOGIN :
			return {
				...state,
				isAuthenticated: true
			};
		case LOGOUT_USER :
			return {
				...state,
				isAuthenticated: false,
				errorMessage: "",
				successMessage: "",
				userData: []
			};

		default:
			return state
	}

};

export default userReducer;
