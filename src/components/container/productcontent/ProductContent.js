import React, { Component } from 'react';

import Product from './product/Product';

class ProductContent extends Component {
  render() {
    return (
        <div className="main-content">
            <Product />
        </div>
    );
  }
}

export default ProductContent;
