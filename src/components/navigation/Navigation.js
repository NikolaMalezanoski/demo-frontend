import React from 'react';
import {Menu, Dropdown, Icon} from "antd";
import logo from "../../images/main-logo.svg";
import _ from "lodash";
import "./Navigation.scss";

const Navigation = ({userData, logOut}) => {

	const user = () => {
		if (!_.isEmpty(userData)) {
			return _.startCase(_.toLower(userData.firstName))
		}
	};

	const menu = (
		<Menu>
			<Menu.Item>
				<a rel="noopener noreferrer" href="# ">
				Мои Проекти
				</a>
			</Menu.Item>
			<Menu.Item>
				<a rel="noopener noreferrer" href="# ">
					Поставки
				</a>
			</Menu.Item>
			<Menu.Item onClick={logOut}>
				<a rel="noopener noreferrer" href="# ">
					Одјави се
				</a>
			</Menu.Item>
		</Menu>
	);

	return (
		<>
			{userData.length !== 0 ? <nav>
					<div className="container">
						<div className="navbar-default">
							<div>
								<a href="# ">
									<img src={logo} alt="Majstorce Logo"/>
								</a>
							</div>

							<div>
								<Dropdown overlay={menu} placement="bottomRight">
									<a className="ant-dropdown-link" href="#">
										{user()} <Icon type="down"/>
									</a>
								</Dropdown>
							</div>
						</div>
					</div>
				</nav>

				:
				null
			}

		</>
	);
};

export default Navigation;
