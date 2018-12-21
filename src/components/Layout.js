import React from "react";
import { Route } from "react-router-dom";
import Header from './header/Header';
import ErrorBar from './errorbar/ErrorBar';
import NavigationBar from './navigationbar/NavigationBar';
import Footer from './footer/Footer';

const Layout = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        <main>
            <Header />
            <ErrorBar />
            <NavigationBar />
            <Component />
            <Footer />
        </main>
    )}/>
  );

  export default Layout;  