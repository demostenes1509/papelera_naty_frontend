import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import loginFacebookActions from './loginFacebookActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class NewCustomer extends Component {

	constructor(props) {
		super(props);
		this.facebookResponse = this.facebookResponse.bind(this);
	}	

	facebookResponse (response) {
		this.props.loginFacebook(response.accessToken, response.signedRequest);
		/*
		const tokenBlob = new Blob([JSON.stringify({accessToken: response.accessToken, signedRequest:response.signedRequest}, null, 2)], {type : 'application/json'});
		const options = {
				method: 'POST',
				body: tokenBlob,
				mode: 'no-cors',
				cache: 'default'
		};
		fetch('http://localhost:3001/login-facebook', options).then(r => {
			console.log(r);
		})
		*/
	}

  render() {
    return (
      <div className="authentication-forms-container">

			<FacebookLogin
					appId='1940969909302994'
					autoLoad={false}
					fields="name,email,picture"
					callback={this.facebookResponse} />

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
