import React, { Component } from 'react';

import NewCustomer from './newcustomer/NewCustomer';
import ExistingCustomer from './existingcustomer/ExistingCustomer';

class Authentication extends Component {
  render() {
    return (
        <section className="authentication">
          <h2 className="authentication-main-title">Autentificación</h2>
          <div className="authentication-forms">
            <NewCustomer />
            <ExistingCustomer />
          </div>
        </section>
    );
  }
}

export default Authentication;
