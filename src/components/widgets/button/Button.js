import React from "react";
import PropTypes from "prop-types";
import spinner from "../../../images/spinner_white.svg";
import "./Button.scss";

const Button = ({type, name, classes, disabled, clicked, loader}) => {

	return (
		<button
			className={classes}
			type={type}
			onClick={clicked}
			disabled={disabled}
		>
			{name}
			<span>
				<img
					className={loader ? "loader-active" : "loader-inactive"}
					src={spinner} alt="Мајсторче сликичка"
				/>
			</span>
		</button>
	)
};

Button.defaultTypes = {
	type: "",
	name: "",
	classes: "button",
	disabled: false,
	clicked: ""
};

Button.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	classes: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	clicked: PropTypes.func
};

export default Button;
