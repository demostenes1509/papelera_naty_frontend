import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import sidebarActions from './sidebarActions'

class SideBar extends Component {

    render() {
    const { payload, loading } = this.props

    console.log(payload.offers);


    return (

        <div className="sidebar">

            {/* Categories */}

            <div className="categories-sidebar">
                <h2 className="aside-title">Categorias</h2>
                    <ul className="aside-menu">
                        {payload.categories.map(category => (
                            <li key={category.id}>
                                <Link to={`/${category.url}`}>{category.name}</Link>
                                <ul className="aside-sub-menu">
                                    {category.products.map(product => (
                                        <li>
                                            <Link to={`/${category.url}/${product.url}`}>{product.name}</Link>
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


                {payload.offers.map(offer => (
                    <div className="discount-container ">
                        <div className="discount-image">
                            <Link to={`/${offer.category.url}/${offer.url}`}>
                                <img src="/images/discount-product.jpg" alt="" />
                            </Link>
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

                ))}

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

                    <li><Link to='/envios-y-devoluciones'>Envíos y Devoluciones</Link></li>
                    <li><Link to='/quienes-somos'>Quienes somos</Link></li>
                    <li><Link to='/aviso-legal'>Aviso legal</Link></li>
                    <li><Link to='/condiciones-generales'>Condiciones generales</Link></li>
                    <li><Link to='/formas-pago'>Formas de pago</Link></li>
                    <li><Link to='/proteccion-datos'>Protección de datos</Link></li>
                    <li><Link to='/politica-cookies'>Política de cookies</Link></li>
                    <li><Link to='/preguntas-frecuentes'>Preguntas Frecuentes</Link></li>
                </ul>
            </div>
        </div>
    );
  }

  componentDidMount () {
    this.props.fetch();
  }
}

const mapStateToProps = state => ({
    payload: state.sidebarReducer.payload,
    loading: state.sidebarReducer.loading
  })
  
  const mapDispatchToProps = dispatch => ({
    fetch: () => dispatch(sidebarActions.fetch())
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
  