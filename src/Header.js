import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <header>
            <div className="header-logo">
                <h1>
                    <a href="#"></a>
                </h1>
            </div>
            <div className="header-labels">
                <img src="/public/images/tel-tab.png" />
                <img src="/public/images/header-image.png" />
            </div>
            <div className="header-details">
                <a href="/contact">Contacto</a>
                <div className="cart-box">
                    <a className = "header-cart" href="/shopping-cart">Carrito:vacío</a>
                </div>
                <a href="/login">Inicio de Sesión</a>
            </div>
        </header>
    );
  }
}

export default Header;
