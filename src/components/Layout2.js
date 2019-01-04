import React from "react";
import { Route } from "react-router-dom";
import Header from './header/Header';
import ErrorBar from './errorbar/ErrorBar';
import NavigationBar from './navigationbar/NavigationBar';
import Footer from './footer/Footer';
import MainContent from './container/maincontent/MainContent';
import ProductContent from './container/productcontent/ProductContent';
import Authentication from './container/authentication/Authentication';

const Layout2 = ({ sidebar: SideBar, container: Container, ...rest }) => (
    <Route {...rest} render={props => (
        <main>
            <Header />
            <ErrorBar />
            <NavigationBar />
            <section className="container">

                { SideBar ? <SideBar /> : null }
                { Container === 'maincontent' ? <MainContent /> : null }
                { Container === 'authentication' ? <Authentication /> : null }
                { Container === 'product' ? <ProductContent /> : null }

                {/* if(Sidebar) <SideBar /> */}
                {/* if(Container ='maincontent') <MainContent /> */}
                {/* if(Container ='authentication') <Authentication /> */}
                {/* if(Container ='product') <ProductContent /> */}

            </section>
            <Footer />
        </main>
    )}/>
  );

  export default Layout2;  