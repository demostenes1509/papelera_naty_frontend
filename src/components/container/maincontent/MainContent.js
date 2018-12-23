import React, { Component } from 'react';

import Slider from './slider/Slider';
import MainProducts from './mainproducts/MainProducts';

class MainContent extends Component {
  render() {
    return (
        <div className="main-content">
            {/* <Slider /> */}
            <MainProducts />
        </div>
    );
  }
}

export default MainContent;
