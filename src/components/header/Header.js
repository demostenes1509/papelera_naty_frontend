import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from 'components/util/SessionUtil'

class Header extends Component {
	render() {
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
				<HeaderDetails />
				{/* <div className="header-details">
					<Link to="/contact">Contacto</Link>
					<div className="cart-box">
						<Link to="/shopping-cart" className="header-cart">Carrito:vacío</Link>
					</div>
					<Link to="/login">Inicio de Sesión</Link>
				</div> */}
			</header>
		);
	}
}

const HeaderDetails = () => {
	if(isLoggedIn()) {
		return <div className="header-details">
			<p>LOGEADO !!</p>
		</div>
	}
	else {
		return <div className="header-details">
					<Link to="/contact">Contacto</Link>
					<div className="cart-box">
						<Link to="/shopping-cart" className="header-cart">Carrito:vacío</Link>
					</div>
					<Link to="/login">Inicio de Sesión</Link>
				</div>;
	}

}

export default Header;
