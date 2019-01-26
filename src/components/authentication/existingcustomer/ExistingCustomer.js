import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import loginActions from './loginActions'
import { connect } from 'react-redux'
import userSessionActions from 'components/usersession/userSessionActions'
class ExistingCustomer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
		this.onClick = this.onClick.bind(this);
	}

	validateForm() {
		return this.state.email.length > 0 && this.state.password.length > 0;
	}

	onClick(event) {
		event.preventDefault();
		this.props.login(this.state.email, this.state.password);
	}

	render() {

		const { error } = this.props

		return (
			<div className="authentication-forms-container">

				<h3>Ya Soy Cliente</h3>
				<form>
					<label>Correo Electrónico</label>
					<input type="email" className="customer-email" name="email" onChange={event => {this.setState({ email: event.target.value })}} value={this.state.email} />
					<label>Contraseña</label>
					<div className="hideShowPassword-wrapper" >
						<input type="password" className="customer-password hideShowPassword-field" name="password" onChange={event => {this.setState({ password: event.target.value })}} value={this.state.password} />
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

					{error?<p className="footer-error-message">{error}</p>:''}
					<Link to="/forget-password" className="forgot-password">Ha olvidado su contraseña ?</Link>
					<button className="form-btn" disabled={!this.validateForm()} onClick={this.onClick}>Autentificación</button>
				</form>
			</div>
		);
	}

	componentWillReceiveProps(nextprops) {
		console.log('ACA POR ERROR');
		const { loggedin,isadmin } = nextprops;
		if(loggedin) {
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
	login: (email, password) => dispatch(loginActions.post(email, password))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExistingCustomer))