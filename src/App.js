import React, {useEffect} from "react";
import Loader from "./components/widgets/loader/Loader";
import Navigation from "./components/navigation/Navigation";
import Dashboard from "./components/dashboard/Dashboard";
import {connect} from "react-redux";
import {setToken} from "./utilities/LocalStorageService";
import {loadPersonalDetails, logOut, getCategories} from "./store/actions/authActions";
import {requestInterceptor, responseInterceptor} from "./utilities/LocalStorageService";
import 'antd/dist/antd.css';
import "./App.scss";

if (localStorage.access_token && localStorage.refresh_token) {
	setToken(localStorage.access_token, localStorage.refresh_token)
}

const App = ({loadPersonalDetails, userData, logOut, getCategories}) => {

	useEffect(() => {
		requestInterceptor();
		responseInterceptor();
		loadPersonalDetails();
		// getCategories();
	}, []);

	const logOutUser = () => {
		logOut();
	};


	return (
		<>
			{userData.length !== 0 ?
				<div className="App">

					<Navigation
						userData={userData}
						logOut={logOutUser}
					/>

					<div className="container">
						<Dashboard userData={userData}/>
						<button onClick={() => getCategories()}>Get Categories</button>
						<button onClick={() => loadPersonalDetails()}>Get Personal Details</button>
					</div>
				</div>
				:
				<Loader/>

			}
		</>

	);
};

const mapStateToProps = state => {
	return {
		userData: state.auth.userData
	}
};

export default connect(mapStateToProps, {loadPersonalDetails, logOut, getCategories})(App);
