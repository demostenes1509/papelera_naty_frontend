import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <header>
            <div className="header-logo">
                <h1>
                    <a></a>
                </h1>
            </div>
            <div className="header-labels">
                <img src='/images/tel-tab.png' alt='ni idea'/>
                <img src='/images/header-image.png' alt='ni idea 2'/>
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
