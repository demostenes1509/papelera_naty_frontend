import React, { Component } from 'react';

class NewCustomer extends Component {
  render() {
    return (
      <div className="new-customer">

        <h3 className="form-header">Registro Nuevo Cliente</h3>
        <p>Escriba su correo electronico para crear su cuenta</p>
        <form>
          <label>Correo Electronico<span className="form-error">Required</span></label>
          <input type="email" className="customer-email form-error-input" name="" />
          <button type="button" className="form-btn">Registro Nuevo Cliente</button>
        </form>


      </div>
    );
  }
}

export default NewCustomer;
