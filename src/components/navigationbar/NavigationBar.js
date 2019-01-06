import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
  render() {
    return (
      <section className="navigation-bar">

        <ul className="main-nav">
          <li>
            <Link to="/" className="sub-menu-item">Inicio</Link>
            <ul className="sub-menu-list">
              <li><Link to="/">List Item 1</Link></li>
              <li><Link to="/">List Item 2</Link></li>
              <li><Link to="/">List Item 3</Link></li>
              <li><Link to="/">List Item 4</Link></li>
              <li><Link to="/">List Item 5</Link></li>
              <li><Link to="/">List Item 6</Link></li>
            </ul>
          </li>
          <li><Link to="/">Mi Cuenta</Link></li>
          <li><Link to="/">Contacto</Link></li>
          <li><Link to="/">Descuentos</Link></li>
          <li><Link to="/">Carrito</Link></li>
          <li className="main-search"><input type="text" className="search-input"/><button className="search-btn">Search</button></li>
        </ul>

      </section>
    );
  }
}

export default NavigationBar;
