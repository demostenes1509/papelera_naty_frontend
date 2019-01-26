import React from "react";
import { Route } from "react-router-dom";
import Header from 'components/header/Header';
import NavigationBar from 'components/navigationbar/NavigationBar';
import Menu from 'components/menu/Menu';

const AdminLayout = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		<main>
			<Header />
			<NavigationBar />
			<section className="container">
				<Menu />
					{/* <Component /> */}
			</section>
		</main>
	)} />
);

export default AdminLayout;  