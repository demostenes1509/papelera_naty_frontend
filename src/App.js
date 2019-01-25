import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from 'components/layouts/Layout';
import AdminLayout from 'components/layouts/AdminLayout';
import Authentication from 'components/authentication/Authentication';
import SideBar from 'components/sidebar/SideBar';
import MainContent from 'components/maincontent/MainContent';
import Product from 'components/productcontent/Product';
import tokenActions from 'components/token/tokenActions'
import userSessionActions from 'components/usersession/userSessionActions'
import { connect } from 'react-redux'
import { setToken } from 'components/util/SessionUtil'
import { TOKEN_NAME } from 'components/util/ConstantsUtil'

class App extends Component {

  render() {
    const { payload } = this.props;

    if(!payload) return <></>;
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
		this.props.fetch();
  }
  
  componentWillReceiveProps(nextprops) {
    const { payload } = nextprops;
    if(payload) {
			setToken(payload[TOKEN_NAME]);
			if(payload.isLoggedIn) this.props.loggedIn(payload);
			else this.props.notLoggedIn();
    }
	}	
}

const mapStateToProps = state => ({
	payload: state.tokenReducer.payload,
	loading: state.tokenReducer.loading,
	error: state.tokenReducer.error
})

const mapDispatchToProps = dispatch => ({
	fetch: () => dispatch(tokenActions.fetch()),
	notLoggedIn: () => dispatch(userSessionActions.notLoggedIn()),
	loggedIn: (payload) => dispatch(userSessionActions.loggedIn(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
