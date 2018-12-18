import React, { Component } from 'react';

class SideBar extends Component {
  render() {
    return (
        <div className="sidebar">
            <div className="categories-sidebar">
                <h2 className="aside-title">Categorias</h2>

                <ul className="aside-menu">
                    <li><a href="#" className="aside-active">Vasos de Plastico</a>
                        <span className="expand"></span>
                        <ul className="aside-sub-menu">
                            <li><a href="#" className="aside-active">Sub Item 1</a></li>
                            <li><a href="#">Sub Item 2</a></li>
                            <li><a href="#">Sub Item 3</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Vasos Personalizados</a></li>
                    <li><a href="#">Vasos de Cubata, Mojito y Sidra</a></li>
                    <li><a href="#">Copas de Plastico</a></li>
                    <li><a href="#">Chupitos de Plastico</a></li>
                    <li><a href="#">Jarras de Plastico</a>
                        <span className="expand"></span>
                        <ul className="aside-sub-menu">
                            <li><a href="#">Sub Item 1</a></li>
                            <li><a href="#">Sub Item 2</a></li>
                            <li><a href="#">Sub Item 3</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="discounts-sidebar">
                <p>DISCOUNTS</p>
            </div>
            <div className="contact-sidebar">
                <p>CONTACT</p>
            </div>
            <div className="information-sidebar">
                <p>INFORMATION</p>
            </div>
        </div>
    );
  }
}

export default SideBar;
