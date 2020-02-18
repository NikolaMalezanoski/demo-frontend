import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route, withRouter} from "react-router-dom";

import App from "./App";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import PrivateRoute from "./utilities/PrivateRoute";

import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider, connect} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./store/reducers";

import {autoLogIn} from "./store/actions/authActions";
import {requestInterceptor, responseInterceptor} from "./utilities/LocalStorageService";

const store = createStore(rootReducer, composeWithDevTools(
	applyMiddleware(thunk)
));


class Root extends Component {

	componentDidMount() {
		const token = localStorage.getItem("access_token");
		// requestInterceptor();
		// responseInterceptor();
		if (token) {
			this.props.autoLogIn();
		}
	}

	render() {
		return (
			<>
				<Switch>
					<Route path="/login" component={Login}/>
					<Route path="/register" component={Register}/>
					<PrivateRoute exact path="/" component={App}/>
				</Switch>
			</>
		)
	}
}

const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.isAuthenticated
	}
};


const RootWithStore = withRouter(connect(mapStateToProps, {autoLogIn})(Root));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<RootWithStore/>
		</BrowserRouter>
	</Provider>
	,
	document.getElementById("root")
);
