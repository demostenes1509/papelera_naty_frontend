import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Layout2 from './components/Layout2';
import Authentication from './components/container/authentication/Authentication';
import SideBar from './components/container/sidebar/SideBar';
import MainContent from './components/container/maincontent/MainContent';
import ProductContent from './components/container/productcontent/ProductContent';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Layout2 exact path="/" sidebar={SideBar} container='maincontent'/>
          <Layout2 exact path="/:category" sidebar={SideBar} container='maincontent'/>
          <Layout2 exact path="/search/:search" sidebar={SideBar} container='maincontent'/>
          <Layout2 exact path="/login" sidebar={SideBar} container='authentication'/>
          <Layout2 exact path="/:category/:product" sidebar={SideBar} container='product'/>
          {/* <Layout exact path="/" components={[SideBar,MainContent]}/>
          <Layout exact path="/:category" components={[SideBar,MainContent]}/>
          <Layout exact path="/search/:search" components={[SideBar,MainContent]}/>
          <Layout exact path="/login" components={[Authentication]}/>
          <Layout exact path="/:category/:product" components={[SideBar,ProductContent]}/> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
