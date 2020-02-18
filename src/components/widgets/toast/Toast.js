import React, {useState} from "react";
import PropTypes from "prop-types";
import "./Toast.scss";

const Toast = ({toggle, message, background}) => {

	return (
		<div id="toast" className={toggle ? "show-toast" : ""} style={{backgroundColor: background}}>
			<div className="desc">
				<p>
					{message}
				</p>
			</div>
		</div>
	)
};

Toast.defaultProps = {
	toggle: false,
	message: "",
	background: ""
};

Toast.propTypes = {
	toggle: PropTypes.bool.isRequired,
	message: PropTypes.string.isRequired,
	background: PropTypes.string.isRequired
};

export default Toast;
