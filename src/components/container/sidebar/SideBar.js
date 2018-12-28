import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'axios';

class SideBar extends Component {

    constructor() {
        super();
        this.state = { categories: [] };
    }

  render() {
    return (
        <div className="sidebar">

            {/* Categories */}

            <div className="categories-sidebar">
                <h2 className="aside-title">Categorias</h2>
                        <ul className="aside-menu">
                            {this.state.categories.map(category => (
                                <li key={category.id}>
                                    <Link to={`/category/${category.url}`}>{category.name}</Link>
                                    <ul className="aside-sub-menu">
                                        {category.products.map(product => (
                                            <li>
                                                <Link to={`/category/${category.url}/product/${product.url}`}>{product.name}</Link>
                                            </li>
                                        ))}                                    
                                    </ul>
                                </li>
                            ))}
                        </ul>

                {/* <ul className="aside-menu">
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
                </ul> */}
            </div>

            {/* Discounts */}

            <div className="discounts-sidebar">
                <h2 className="aside-title">Descuentos</h2>
                <div className="discount-container ">
                    <div className="discount-image">
                        <a href="#"><img src="/images/discount-product.jpg" alt="" /></a>
                    </div>
                    <div className="discount-details">
                        <ul>
                            <li className="item-name"><span className="discount-tag">10%</span>
                                <a href="#">Vasos de Plastico Irrompibles 100cc Moca</a>
                            </li>
                            <li className="old-price">1,84 €</li>
                            <li className="discount-price">1,47 €</li>
                        </ul>
                    </div>
                </div>
                <div className="discount-container">
                    <div className="discount-image">
                        <a href="#"><img src="/images/discount-product.jpg" alt="" /></a>
                    </div>
                    <div className="discount-details">
                        <ul>
                            <li className="item-name"><span className="discount-tag">10%</span>
                                <a href="#">Vasos de Plastico Irrompibles 100cc Moca</a>
                            </li>
                            <li className="old-price">1,84 €</li>
                            <li className="discount-price">1,47 €</li>
                        </ul>
                    </div>
                </div>
                <p><a href="#">&gt;&gt; Todos los descuentos</a></p>
            </div>

            {/* Contact */}

            <div className="contact-sidebar" >

                <h2 className="aside-title">Contactar</h2>
                <div className="contact-details">
                    <ul>
                        <li className="aside-tel"><a href="#">011 5888 3335</a></li>
                        <li className="aside-email"><a href="#">naty@papeleranaty.com</a></li>
                    </ul>
                </div>
            </div>



            <div className="information-sidebar">
                <h2 className="aside-title">Información</h2>
                <ul className="aside-menu">
                    <li><a href="#">Envíos y Devoluciones</a></li>
                    <li><a href="#">Quienes somos</a></li>
                    <li><a href="#">Aviso legal</a></li>
                    <li><a href="#">Condiciones generales</a></li>
                    <li><a href="#">Formas de pago</a></li>
                    <li><a href="#">Protección de datos</a></li>
                    <li><a href="#">Política de cookies</a></li>
                    <li><a href="#">Preguntas Frecuentes</a></li>
                </ul>
            </div>
        </div>
    );
  }

    async componentDidMount() {
        const categories = await get(`http://localhost:3001/categoriesproducts`);
        this.setState({ categories: categories.data });
    }
}

export default SideBar;
