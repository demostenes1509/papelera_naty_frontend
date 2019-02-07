import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import TwitterLogin from 'react-twitter-auth';
import loginFacebookActions from './loginFacebookActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class NewCustomer extends Component {

	constructor(props) {
		super(props);
		this.facebookResponse = this.facebookResponse.bind(this);
	}	

	facebookResponse (response) {
		if(response.accessToken && response.signedRequest) {
			this.props.loginFacebook(response.accessToken, response.signedRequest);
		}
	}

  render() {
    return (
      <div className="authentication-forms-container">

			<FacebookLogin
					appId='1940969909302994'
					autoLoad={false}
					fields="name,email,picture"
					callback={this.facebookResponse} />

			<TwitterLogin loginUrl="http://localhost:4000/api/v1/auth/twitter"
										onFailure={this.onFailure} onSuccess={this.twitterResponse}
										requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"/>					

        {/* <h3>Registro Nuevo Cliente</h3>
        <p>Escriba su correo electrónico para crear su cuenta</p>
        <form>
          <label>Correo Electrónico</label>
          <input type="email" className="customer-email form-error-input" name="" />
          <button type="button" className="form-btn">Registro Nuevo Cliente</button>
        </form> */}

      </div>
    );
	}
	
	componentWillReceiveProps(nextprops) {
		const { loggedin,isadmin } = nextprops;
		if(loggedin && loggedin!==this.props.loggedin) {
			const newpath=(isadmin?'/gestion':'/');
			this.props.history.push({
				pathname: newpath
			});
		}
	}	

}

const mapStateToProps = state => ({
	error: state.userSessionReducer.error,
	loggedin: state.userSessionReducer.isLoggedIn,
	isadmin: state.userSessionReducer.isAdmin
})

const mapDispatchToProps = dispatch => ({
	loginFacebook: (accessToken, signedRequest) => dispatch(loginFacebookActions.post(accessToken, signedRequest))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewCustomer))
