import React, {useEffect, useState} from "react";
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {loginUser} from "../../store/actions/authActions";
import Input from "../widgets/inputs/Input";
import Button from "../widgets/button/Button";
import "./Auth.scss";
import Toast from "../widgets/toast/Toast";

const Login = ({loginUser, isLoading, isAuthenticated, errorMessage}) => {

	const [inputs, setInputs] = useState({
		email: "",
		password: "",
	});

	const [toast, setToast] = useState({
		toggle: false,
		message: "",
		background: ""
	});

	const [errors, setErrors] = useState({
		errMessage: []
	});

	useEffect(() => {

		if(errorMessage) {
			toastToggler(errorMessage, "#e73a28");
		}

	}, [errorMessage]);

	const inputHandler = event => {
		setInputs({
			...inputs,
			[event.target.name]: event.target.value
		})
	};

	const submitHandler = event => {
		event.preventDefault();

		if (formValid()) {
			loginUser(inputs);
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
		}

		return true
	};

	const inputsEmpty = () => {
		return (
			 !inputs.email.length || !inputs.password.length
		)
	};

	const emailValid = () => {
		return !!inputs.email.match(/\S+@\S+\.\S+/);
	};

	const passwordLength = () => {
		return inputs.password.length >= 6;
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

	const {toggle, message, background} = toast;

	if(isAuthenticated) {
		return <Redirect to="/" />
	}

    return (
		<div className="auth-wrapper">
			<div className="auth-wrapper__item">
				<div className="form-wrapper">
					<form onSubmit={submitHandler} noValidate autoComplete="new-password">
						<h3>Најава на корисници</h3>
						<div className="form-group">
							<Input
								type="text"
								name="email"
								autocomplete="new-password"
								change={inputHandler}
								label="Е-маил адреса"
							/>
						</div>
						<div className="form-group">
							<Input
								type="password"
								name="password"
								autocomplete="new-password"
								change={inputHandler}
								label="Лозинка"
							/>
						</div>
						<div data-form="submit-button">
							<Button
								type="submit"
								name="Најави се"
								classes="button button-medium"
								loader={isLoading}
							/>
						</div>
					</form>
				</div>
				<p>Нов корисник, <Link to="/register">регистрирајте се тука</Link></p>
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
		errorMessage: state.auth.errorMessage
	};
};

export default connect(mapStateToProps, {loginUser})(Login);
