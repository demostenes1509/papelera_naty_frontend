import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class NewCustomer extends Component {

	facebookResponse (response) {

		const tokenBlob = new Blob([JSON.stringify({accessToken: response.accessToken, signedRequest:response.signedRequest}, null, 2)], {type : 'application/json'});
		const options = {
				method: 'POST',
				body: tokenBlob,
				mode: 'no-cors',
				cache: 'default'
		};
		fetch('http://localhost:3001/login-fb', options).then(r => {
			console.log(r);
		})
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

export default NewCustomer;
