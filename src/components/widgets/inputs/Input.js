import React from "react";
import "./Input.scss";

const Input = ({type, name, autocomplete, change, errors, label}) => {
	return (
		<>
			<input
				type={type}
				name={name}
				onChange={change}
				autoComplete={autocomplete}
				className={errors}
				required
			/>
			<span className="highlight">{""}</span>
			<span className="bar">{""}</span>
			<label>{label}</label>
		</>
	)
};

export default Input;
