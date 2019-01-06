import React, { Component } from 'react';

import MainProducts from './mainproducts/MainProducts';

class MainContent extends Component {
  render() {
    return (
        <div className="main-content">
            <MainProducts />
        </div>
    );
  }
}

export default MainContent;
