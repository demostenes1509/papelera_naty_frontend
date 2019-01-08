import React from "react";
import { Route } from "react-router-dom";
import Header from './header/Header';
import NavigationBar from './navigationbar/NavigationBar';
import Footer from './footer/Footer';

const Layout = ({ components: Components, ...rest }) => (
	<Route {...rest} render={props => (
		<main>
			<Header />
			<NavigationBar />
			<section className="container">
				{Components.map((Component, i) => (
					<Component key={i} />
				))}
			</section>
			<Footer />
		</main>
	)} />
);

export default Layout;  