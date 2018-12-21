import React, { Component } from 'react';
import Authentication from './authentication/Authentication';

class AuthenticationContainer extends Component {
  render() {
    return (
      <section className="container">
        <Authentication />
      </section>
    );
  }
}
 
export default AuthenticationContainer;
