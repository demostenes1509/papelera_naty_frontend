import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom';
import logoutActions from './logoutActions'
import { connect } from 'react-redux'
import userSessionActions from 'components/usersession/userSessionActions'

class Header extends Component {

	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	render() {

		// Ver como mostrar el error de logout aca !!
		return (
			<header>
				<div className="header-logo">
					<h1>
						<Link to="/"></Link>
					</h1>
				</div>
				<div className="header-labels">
					<img src='/images/tel-tab.png' alt='ni idea' />
					<img src='/images/header-image.png' alt='ni idea 2' />
				</div>
				<HeaderDetails onClick={this.onClick} loggedin={this.props.loggedin}/>
			</header>
		);
	}

	onClick(event) {
		event.preventDefault();
		this.props.logout();
	}	

	componentWillReceiveProps(nextprops) {
		const { loggedin } = nextprops;
		if(!loggedin && loggedin !== this.props.loggedin) {
			this.props.history.push({
				pathname: '/'
			});				
		}
	}		
}

const HeaderDetails = (props) => {
	if(props.loggedin) {
		return	<div className="header-details">
							<p>LOGEADO !!</p>
							<Link to="/" onClick={props.onClick}>Logout</Link>
						</div>
	}
	return <div className="header-details">
						<Link to="/contact">Contacto</Link>
						<div className="cart-box">
							<Link to="/shopping-cart" className="header-cart">Carrito:vacío</Link>
						</div>
						<Link to="/login">Inicio de Sesión</Link>
				</div>;
}

const mapStateToProps = state => ({
	loggedin: state.userSessionReducer.isLoggedIn,
	error: state.userSessionReducer.error
})

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(logoutActions.post())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
