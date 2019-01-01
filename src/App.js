import React, { Component } from 'react';
import HomePageContainer from './components/container/HomePageContainer';
import AuthenticationContainer from './components/container/AuthenticationContainer';
import ProductContainer from './components/container/ProductContainer';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from './components/Layout';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Layout exact path="/" component={HomePageContainer}/>
          <Layout exact path="/:category" component={HomePageContainer}/>
          <Layout exact path="/search/:search" component={HomePageContainer}/>
          <Layout exact path="/login" component={AuthenticationContainer}/>
          <Layout exact path="/:category/:product" component={ProductContainer}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
