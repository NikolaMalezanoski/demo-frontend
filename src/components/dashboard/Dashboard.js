import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {message} from "antd";
import Posting from "./userpostings/Posting";
import _ from "lodash";
import "./Dashboard.scss";

const Dashboard = ({userData}) => {

	const [postings, setPostings] = useState([
		{
			date: "20/07/2019",
			location: "Кочани",
			category: "Водоинсталатери",
			title: "Монитирање на ќешма во кујна и купатило",
			offers: 3
		},
		{
			date: "08/05/2019",
			location: "Тетово",
			category: "Паркетари и Подови",
			title: "Потребен е паркетар за брусање и лакирање на 2 простории",
			offers: 1
		},
		{
			date: "23/04/2019",
			location: "Охрид",
			category: "Електричари",
			title: "Поправка на стар електричен шпорет",
			offers: 0,
		}
	]);

	const publishButtonStyles = {
		cursor: "not-allowed",
		opacity: "0.5"
	};

	const checkPublishButton = () => {
		return !userData.emailVerified ? publishButtonStyles : null
	};

	useEffect(() => {
		if (!userData.emailVerified) {
			warningMessage("За да продолжите со користење на нашата апликација ве молиме кликнете на линкот кој што ви беше испратен на вашата е-маил адреса");
		}

	}, []);

	const warningMessage = msg => {
		message.config({
			top: 125
		});
		message.warning(msg, 4);
	};


	const renderPostings = () => {
		return _.map(postings, (posting, index) => (
			<Posting postings={posting} key={index}/>
		))
	};

	return (
		<div className="user-postings-wrap animated fadeInUp">
			<div className="user-postings-wrap-header">
				<div className="user-postings-wrap-header__item">
					<h2>Мои Проекти <span>({postings.length})</span></h2>
				</div>

				<div className="user-postings-wrap-header__item">
					<Link to="/" className="button button-medium" style={checkPublishButton()}>
						Објави Проект
					</Link>
				</div>
			</div>

			<div className="postings-wrap">
				{postings.length !== 0 ?
					renderPostings() :
					<h6>
						Немате објавено проекти.{" "}
						<Link to="/">Кликнете тука</Link>{" "}
						за нов проект
					</h6>
				}

			</div>
		</div>
	);
};

Dashboard.propTypes = {
	userData: PropTypes.object
};

export default Dashboard;
