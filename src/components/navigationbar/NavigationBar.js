import React, { Component } from 'react';

class NavigationBar extends Component {
  render() {
    return (
      <section className="navigation-bar">

        <ul className="main-nav">
          <li><a href="#" className="sub-menu-item">Inicio</a>
            <ul className="sub-menu-list">
              <li><a href="#">List item 1</a></li>
              <li><a href="#">List item 2</a></li>
              <li><a href="#">List item 3</a></li>
              <li><a href="#">List item 4</a></li>
              <li><a href="#">List item 5</a></li>
              <li><a href="#">List item 6</a></li>
              <li><a href="#">List item 7</a></li>
              <li><a href="#">List item 8</a></li>
            </ul>
          </li>
          <li><a href="#">Mi Cuenta</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Descuentos</a></li>
          <li><a href="#">Carrito</a></li>
          <li className="main-search"><input type="text" className="search-input"/><button className="search-btn">Search</button></li>
        </ul>

      </section>
    );
  }
}

export default NavigationBar;
