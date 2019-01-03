import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainProduct extends Component {
  render() {
    return (
			<>
					<Link to="/product">
						<img className="main-product-image" src="/images/product-img1.jpg" alt=""/>
					</Link>
					<h3 className="main-product-title"><a href="#">Sed ut perspiciatis unde omnis iste</a></h3>
					<p className="main-product-description"><a href="#">Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed ut perspiciatis unde omnis iste natus error sit voluptatem...</a></p>
					<div className="product-prices">
						<p><span className="price-con">1,25€</span> con IVA</p>
						<p>1,25€ sin IVA</p>
					</div>
			</>			
    );
  }
}

export default MainProduct;
