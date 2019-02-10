import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from 'components/layouts/Layout';
import AdminLayout from 'components/layouts/AdminLayout';
import Authentication from 'components/authentication/Authentication';
import SideBar from 'components/sidebar/SideBar';
import MainContent from 'components/maincontent/MainContent';
import Product from 'components/productcontent/Product';
import tokenActions from 'components/token/tokenActions'
import { connect } from 'react-redux'
import { socket } from 'components/util/SocketUtil';

// import io from 'socket.io-client';
// import {API_URL} from 'config';

// const socket = io(API_URL);

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
		const { fetch } = this.props; 
		socket.on('connect', function() {
			fetch(socket.id);
		}); 
  }
}

const mapStateToProps = state => ({
	loggedin: state.userSessionReducer.isLoggedIn,
	error: state.userSessionReducer.error	
})

const mapDispatchToProps = dispatch => ({
	fetch: (socketId) => dispatch(tokenActions.fetch(socketId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
