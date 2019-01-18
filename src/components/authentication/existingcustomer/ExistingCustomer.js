import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import loginActions from './loginActions'
import { connect } from 'react-redux'

class ExistingCustomer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			email:'', 
			password:''
		}
		this.onClick = this.onClick.bind(this);
	}

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
	}	
	
	onClick(event) {
		event.preventDefault();
		this.props.login(this.state.email,this.state.password);
  }	

	render() {
		return (
			<div className="authentication-forms-container">

				<h3>Ya Soy Cliente</h3>
				<form>
					<label>Correo Electrónico</label>
					<input type="email" className="customer-email" name="email" onChange={event => {this.setState({email: event.target.value})}} value={this.state.email}/>
					<label>Contraseña</label>
					<div className="hideShowPassword-wrapper" >
						<input type="password" className="customer-password hideShowPassword-field" name="password" onChange={event => {this.setState({password: event.target.value})}} value={this.state.email} value={this.state.password}/>
						<button aria-label="Show Password" tabIndex="0" className="hideShowPassword-toggle hideShowPassword-toggle-show" aria-pressed="false" >Show</button>
					</div>
					{/* <label className="form-check">This is a checkbox<input type="checkbox" className="form-check" /></label>
					<label className="form-check">This is a checkbox<input type="checkbox" /></label>
					<label className="form-select">This is a select
								<select>
							<option>Option 1</option>
							<option>Option 2</option>
							<option>Option 3</option>
							<option>Option 4</option>
						</select>
					</label>
					<label className="form-select">This is a select
								<select>
							<option>Option 1</option>
							<option>Option 2</option>
							<option>Option 3</option>
							<option>Option 4</option>
						</select>
					</label> */}
					
					<Link to="/forget-password" className="forgot-password">Ha olvidado su contraseña ?</Link>
					<button className="form-btn" disabled={!this.validateForm()} onClick={this.onClick}>Autentificacion</button>
				</form>
			</div>
		);
	}
}

// export default ExistingCustomer;

const mapStateToProps = state => ({
  response: state.loginReducer.response,
  waiting: state.loginReducer.waiting,
  error: state.loginReducer.error
})

const mapDispatchToProps = dispatch => ({
  login: (email,password) => dispatch(loginActions.post(email,password))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExistingCustomer)