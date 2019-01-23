import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from 'components/Layout';
import Authentication from 'components/authentication/Authentication';
import SideBar from 'components/sidebar/SideBar';
import MainContent from 'components/maincontent/MainContent';
import Product from 'components/productcontent/Product';
import tokenActions from 'components/token/tokenActions'
import { connect } from 'react-redux'
import { setSessionInfo } from 'components/util/SessionUtil'

class App extends Component {

  render() {
    const { payload } = this.props;

    if(!payload) return <></>;
    return (
      <Router>
        <Switch>
          <Layout exact path="/" components={[SideBar,MainContent]}/>
          <Layout exact path="/login" components={[Authentication]}/>
          <Layout exact path="/search/:search" components={[SideBar,MainContent]}/>
          <Layout exact path="/:category" components={[SideBar,MainContent]}/>
          <Layout exact path="/:category/:product" components={[SideBar,Product]}/>
        </Switch>
      </Router>
    );
  }

  componentWillMount() {
		this.props.fetch();
  }
  
  componentWillReceiveProps(nextprops) {
    const { payload } = nextprops;
    if(payload) {
      setSessionInfo(payload);
    }
	}	
}

const mapStateToProps = state => ({
	payload: state.tokenReducer.payload,
	loading: state.tokenReducer.loading,
	error: state.tokenReducer.error
})

const mapDispatchToProps = dispatch => ({
	fetch: () => dispatch(tokenActions.fetch())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
