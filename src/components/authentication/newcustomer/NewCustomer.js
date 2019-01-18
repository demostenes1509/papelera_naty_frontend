import React, { Component } from 'react';

class NewCustomer extends Component {
  render() {
    return (
      <div className="authentication-forms-container">

        <h3>Registro Nuevo Cliente</h3>
        <p>Escriba su correo electrónico para crear su cuenta</p>
        <form>
          <label>Correo Electrónico</label>
          <input type="email" className="customer-email form-error-input" name="" />
          <button type="button" className="form-btn">Registro Nuevo Cliente</button>
        </form>


      </div>
    );
  }
}

export default NewCustomer;
