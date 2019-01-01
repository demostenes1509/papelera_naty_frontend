import React, { Component } from 'react';
import { connect } from 'react-redux'
import footerActions from './footerActions'
import { Link } from 'react-router-dom';
 
class Footer extends Component {

  render() {
    const { payload, loading } = this.props

    return (

        <footer className="main-footer">
          <section className="footer-subscribe">
            <p>Subscribe a nuestras novedades y ofertas</p>
            <div className="subscribe-form">
              <div className="subscribe-input">
                <input type="text" placeholder="su email" /><button className="subscribe-btn">Enviar</button>
              </div>
              <div className="subscribe-checkbox">
                <input type="checkbox" /><span>He leido y estoy conforme con la <a href="#">Politica de proteccion de Datos</a></span>
              </div>
            </div>
          </section>
          <section className="footer-columns">
            <div className="footer-links">
              <h4>Categorias</h4>
                  <ul>
                    {payload.categories.map(
                      (category) => <li key={category.id}><Link to={category.url}>{category.name}</Link></li>
                    )}
                  </ul>
            </div>
            <div className="footer-links">
              <h4>Infomacion</h4>
              <ul>
                <li><a href="#">Contacte con nostros</a></li>
                <li><a href="#">Envios y Devoluciones</a></li>
                <li><a href="#">Quienes somos</a></li>
                <li><a href="#">Avisio legal</a></li>
                <li><a href="#">Condiciones generales</a></li>
                <li><a href="#">Formas de pago</a></li>
                <li><a href="#">Proteccion de datos</a></li>
                <li><a href="#">Politica de Cookies</a></li>
                <li><a href="#">Descuentos</a></li>
                <li><a href="#">Preguntas Frecuentes</a></li>
                <li><a href="#">Mapa del sitito</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Mi Cuenta</h4>
              <ul>
                <li><a href="#">Mis pedidos</a></li>
                <li><a href="#">Mis vales descuento</a></li>
                <li><a href="#">Mis direcciones</a></li>
                <li><a href="#">Mis datos presonales</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Contacte Con Nosotros</h4>
              <ul>
                <li><a href="#">PlasticoMania.com</a></li>
                <li><a href="#">Tel: 34 644 319 409</a></li>
                <li><a href="#">Email: info@plasticomania.com</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Siguenos</h4>
              <ul className="social-links">
                <li><a href="#"><img src="images/fb-icon.png" /></a></li>
                <li><a href="#"><img src="images/twitter-icon.png" /></a></li>
              </ul>
            </div>
          </section>
        </footer>


    );
  }

  componentDidMount () {
    this.props.fetch();
  }
}

const mapStateToProps = state => ({
  payload: state.footerReducer.payload,
  loading: state.footerReducer.loading
})

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(footerActions.fetch())
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
