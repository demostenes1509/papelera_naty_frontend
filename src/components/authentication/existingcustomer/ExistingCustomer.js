import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ExistingCustomer extends Component {
	render() {
		return (
			<div className="existing-customer">

				<h3 className="form-header">Ya Soy Cliente</h3>
				<form>
					<label>Correo Electronico<span className="form-error">Required</span></label>
					<input type="email" className="customer-email" name="" />
					<label>Contrasena<span className="form-error">Required</span></label>
					<div className="hideShowPassword-wrapper" >
						<input type="password" className="customer-password hideShowPassword-field" name="password" />
						<button aria-label="Show Password" tabIndex="0" className="hideShowPassword-toggle hideShowPassword-toggle-show" aria-pressed="false" >Show</button>
					</div>
					<label className="form-check">This is a checkbox<input type="checkbox" className="form-check" /></label>
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
					</label>
					
					<Link to="/forget-password" className="forgot-password">Ha olvidado su contraseña ?</Link>
					<button className="form-btn">Autentificacion</button>
				</form>
			</div>
		);
	}
}

export default ExistingCustomer;
