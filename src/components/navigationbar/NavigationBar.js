import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavigationBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
    this.onKeyPress = this.onKeyPress.bind(this);
}

  onKeyPress(event) {
    const { history } = this.props;
    if (event.key === 'Enter') {
      if(this.state.query.length>1) {
        history.push({
          pathname: '/search/'+this.state.query
          });
      }
    }
  }

  render() {

    const { history } = this.props;

    return (
      <section className="navigation-bar">
        <div className="navigation-bar-1"></div>
        <div className="navigation-bar-2">
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
            <li className="main-search">
              <input type="text"
                value={this.state.query}
                className="search-input" placeholder="Ingrese búsqueda ( más de dos caracteres )"
                onChange={event => {this.setState({query: event.target.value})}}
                onKeyPress={this.onKeyPress}/>
              <button className="search-btn">Search</button>
            </li>
          </ul>
        </div>
        <div className="navigation-bar-3"></div>
      </section>
    );
  }

  componentDidMount() {
    const { search } = this.props.match.params;
    if(search) {
      this.setState({query: search});
    }
	}
}

export default withRouter(NavigationBar);
