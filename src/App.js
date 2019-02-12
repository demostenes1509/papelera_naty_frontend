import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from 'components/layouts/Layout';
import AdminLayout from 'components/layouts/AdminLayout';
import Authentication from 'components/authentication/Authentication';
import SideBar from 'components/sidebar/SideBar';
import MainContent from 'components/maincontent/MainContent';
import Product from 'components/productcontent/Product';
import userSessionActions from 'components/usersession/userSessionActions'
import { connect } from 'react-redux';
import { getToken,setAxiosAuthToken } from 'components/util/SessionUtil';
import jwt from 'jsonwebtoken';
import { JWT_KEY } from 'config';

class App extends Component {

  render() {
		const { loggedin } = this.props;
    if(loggedin===null) return <></>;
    return (
      <Router>
        <Switch>
          <Layout exact path="/" components={[SideBar,MainContent]}/>
          <AdminLayout exact path="/gestion" components={[Authentication]}/>
          <Layout exact path="/login" components={[Authentication]}/>
          <Layout exact path="/search/:search" components={[SideBar,MainContent]}/>
          <Layout exact path="/:category" components={[SideBar,MainContent]}/>
          <Layout exact path="/:category/:product" components={[SideBar,Product]}/>
        </Switch>
      </Router>
    );
  }

  componentWillMount() {
		const token=getToken();
		setAxiosAuthToken(token);
		if(token) {
			const payload = jwt.verify(token,JWT_KEY);
			this.props.loggedIn(payload);
		}
		else {
			this.props.notLoggedIn();
		}
  }
}

const mapStateToProps = state => ({
	loggedin: state.userSessionReducer.isLoggedIn
})

const mapDispatchToProps = dispatch => ({
	loggedIn: (payload) => dispatch(userSessionActions.loggedIn(payload)),
	notLoggedIn: (payload) => dispatch(userSessionActions.notLoggedIn())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)