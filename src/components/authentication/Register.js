import React, {useState, useEffect} from "react";
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {registerUser} from "../../store/actions/authActions";
import Button from "../widgets/button/Button";
import Input from "../widgets/inputs/Input";
import Toast from "../widgets/toast/Toast";
import _ from "lodash";
import "./Auth.scss";

const Register = ({registerUser, isLoading, isAuthenticated, successMessage, errorMessage, history}) => {

	const [inputs, setInputs] = useState({
		firstName: "",
		email: "",
		password: "",
		confirmPassword: ""
	});

	const [errors, setErrors] = useState({
		errMessage: []
	});

	const [toast, setToast] = useState({
		toggle: false,
		message: "",
		background: ""
	});

	const [mounted, setMounted] = useState(true);

	useEffect(() => {

		if(errorMessage) {
			toastToggler(errorMessage, "#e73a28" )
		}

	},[errorMessage]);

	useEffect(() => {

		let mount = true;

		if (successMessage && mount) {
			// toastToggler(successMessage, "#8ebf2e");
			mount = false;

			setTimeout(() => {
				history.push("/")
			}, 500);
		}

		return () => {
			mount = true
		}

	}, [successMessage]);


	const inputHandler = event => {
		setInputs({
			...inputs,
			[event.target.name]: event.target.value
		})
	};

	const submitHandler = event => {
		event.preventDefault();

		if (formValid()) {
			registerUser(inputs);
			setMounted({
				...mounted,
				mounted: true
			})
		}
	};

	const formValid = () => {

		let error = "";
		let errors = [];

		if (inputsEmpty()) {
			error = "Ве молиме пополнете ги сите полиња";

			toastToggler(error, "#e73a28");

			setErrors({
				...errors,
				errMessage: errors.concat(error)
			});

			return false;
		} else if (!nameValid()) {
			error = "Вашето име треба содржи најмалку 3 карактери";

			toastToggler(error, "#e73a28");

			setErrors({
				...errors,
				errMessage: errors.concat(error)
			});

			return false;

		} else if (!emailValid()) {
			error = "Ве молиме внесете точна е-маил адреса";

			toastToggler(error, "#e73a28");

			setErrors({
				...errors,
				errMessage: errors.concat(error)
			});

			return false;
		} else if (!passwordLength()) {
			error = "Лозинката треба да содржи најмалку 6 карактери";

			toastToggler(error, "#e73a28");

			setErrors({
				...errors,
				errMessage: errors.concat(error)
			});

			return false;
		} else if (!passwordsMatch()) {
			error = "Лозинките не се совпаѓаат. Обидете се повторно";

			toastToggler(error, "#e73a28");

			setErrors({
				...errors,
				errMessage: errors.concat(error)
			});

			return false;
		}

		return true
	};

	const inputsEmpty = () => {
		return (
			!inputs.firstName.length || !inputs.email.length || !inputs.password.length || !inputs.confirmPassword.length
		)
	};

	const nameValid = () => {
		if(inputs.firstName.length < 3 || !inputs.firstName.match(/^[a-zA-Z]+$/)) {
			return false
		} else {
			return true
		}
	};

	const emailValid = () => {
		return !!inputs.email.match(/\S+@\S+\.\S+/);
	};

	const passwordLength = () => {
		return inputs.password.length >= 6;
	};

	const passwordsMatch = () => {
		return inputs.password === inputs.confirmPassword;
	};

	const toastToggler = (error, background) => {
		setToast({
			toggle: true,
			message: error,
			background
		});

		setTimeout(() => {
			setToast({
				toggle: false,
				message: "",
				background: ""
			})
		}, 5000);
	};

	const checkErrors = keyword => {
		return _.some(errors.errMessage, error => error.toLowerCase().includes(keyword)) ? "input-error" : "";
	};

	const {toggle, message, background} = toast;

	if(isAuthenticated) {
		return <Redirect to="/" />
	}

	return (
		<div className="auth-wrapper">
			<div className="auth-wrapper__item">
				<div className="form-wrapper">
					<form onSubmit={submitHandler} noValidate autoComplete="off">
						<h3>Регистрација на корисници</h3>
						<div className="form-group">
							<Input
								type="text"
								name="email"
								autocomplete="new-password"
								change={inputHandler}
								errors={checkErrors("е-маил")}
								label="Е-маил адреса"
							/>
						</div>

						<div className="form-group">
							<Input
								type="text"
								name="firstName"
								autocomplete="new-password"
								change={inputHandler}
								errors={checkErrors("3")}
								label="Вашето име"
							/>
						</div>

						<div className="form-group">
							<Input
								type="password"
								name="password"
								autocomplete="new-password"
								change={inputHandler}
								errors={checkErrors("лозинката")}
								label="Лозинка"
							/>
						</div>

						<div className="form-group">
							<Input
								type="password"
								name="confirmPassword"
								autocomplete="new-password"
								change={inputHandler}
								errors={checkErrors("лозинките")}
								label="Потврди лозинка"
							/>
						</div>

						<div data-form="submit-button">
							<Button
								type="submit"
								name="Регистрирај се"
								classes="button button-medium"
								loader={isLoading}
								disabled={isLoading}
							/>
						</div>
					</form>
				</div>
				<p>Веќе имате кориснички профил, <Link to="/account/login">логирајте се тука</Link></p>
			</div>

			<Toast
				toggle={toggle}
				message={message}
				background={background}
			/>

			<div className="auth-wrapper__item">
				<div>
					<p><span>Мајсторче</span> е Македонска водечка платформа за поврзување на секој
						кој бара локални занаетчии или даватели на услуги со врвни,
						квалификувани, верифицирани мали до големи поединци или
						компании.
					</p>
				</div>
			</div>
		</div>
	)
};

const mapStateToProps = state => {
	return {
		isLoading: state.auth.isLoading,
		isAuthenticated: state.auth.isAuthenticated,
		successMessage: state.auth.successMessage,
		errorMessage: state.auth.errorMessage
	};
};

export default connect(mapStateToProps, {registerUser})(Register);
