import React from 'react';
import { connect } from 'react-redux'
import footerActions from './footerActions'
import { Link } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
 
class Footer extends React.Component {

  render() {
    const { payload, loading, error } = this.props

    return (

        <footer className="main-footer">
          <section className="footer-subscribe">
            <p>Subscribe a nuestras novedades y ofertas</p>
            <div className="subscribe-form">
              <div className="subscribe-input">
                <input type="text" placeholder="su email" /><button className="subscribe-btn">Enviar</button>
              </div>
              <div className="subscribe-checkbox">
                <input type="checkbox" /><span>He leido y estoy conforme con la <Link to='/data-protection'>Política de protección de Datos</Link></span>
              </div>
            </div>
          </section>
          <section className="footer-columns">
            <div className="footer-links">
              <h4>Categorias</h4>
                  <ul>

                    {error?<p className="footer-error-message">{error.message}</p>:''}

                    <PropagateLoader
                            sizeUnit={"px"}
                            size={10}
                            color={'white'}
                            loading={loading}
                          />

                    {payload.categories.map(
                      (category) => <li key={category.id}><Link to={category.url}>{category.name}</Link></li>
                    )}
                  </ul>
            </div>
            <div className="footer-links">
              <h4>Información</h4>
              <ul>
                <li><Link to='/contact'>Contacte con nosotros</Link></li>
                <li><Link to='/envios-y-devoluciones'>Envíos y Devoluciones</Link></li>
                <li><Link to='/quienes-somos'>Quienes somos</Link></li>
                <li><Link to='/aviso-legal'>Aviso legal</Link></li>
                <li><Link to='/condiciones-generales'>Condiciones generales</Link></li>
                <li><Link to='/formas-pago'>Formas de pago</Link></li>
                <li><Link to='/proteccion-datos'>Protección de datos</Link></li>
                <li><Link to='/politica-cookies'>Política de cookies</Link></li>
                <li><Link to='/preguntas-frecuentes'>Preguntas Frecuentes</Link></li>
                <li><Link to='/site-map'>Mapa del sitio</Link></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Mi Cuenta</h4>
              <ul>
                <li><Link to="/">Mis datos personales</Link></li>                
              </ul>
            </div>
            <div className="footer-links">
              <h4>Contacte Con Nosotros</h4>
              <ul>
                <li><Link to="/">Papelera Naty</Link></li>
                <li><Link to="/">Whatsapp: 011 5888 3335</Link></li>
                <li><Link to="/">Email: naty@papeleranaty.com</Link></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Siguenos</h4>
              <ul className="social-links">
                <li><Link to="http://facebook.naty"><img src="images/fb-icon.png" /></Link></li>
                <li><Link to="http://twitter.naty"><img src="images/twitter-icon.png" /></Link></li>
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
  loading: state.footerReducer.loading,
  error: state.footerReducer.error
})

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(footerActions.fetch())
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
