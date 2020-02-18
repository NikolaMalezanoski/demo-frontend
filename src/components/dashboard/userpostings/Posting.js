import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./Posting.scss";

const Posting = ({postings}) => {

	const singularOrPlural = () => {
		return postings.offers === 1 ? "Понуда" : "Понуди"
	};

	return (
		<>
			<div className="single-posting">
				<div>
					<p>
						<span className="green">●</span>
						{postings.date}
					</p>
				</div>
				<div>
					<p>{postings.location} | {postings.category}</p>
					<h4>
						<Link to="/">{postings.title}</Link>
					</h4>
				</div>
				<div>
					<p>
						<span>{postings.offers}</span> {singularOrPlural()}
					</p>
				</div>
			</div>
		</>
	)
};

Posting.propTypes = {
	postings: PropTypes.object
};

export default Posting;
