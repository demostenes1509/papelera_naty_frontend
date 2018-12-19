import React, { Component } from 'react';

class MainProduct extends Component {
  render() {
    return (
			<section className="main-product">
					<a href="#"><img className="main-product-image" src="/images/product-img1.jpg" alt=""/></a>
					<h3 className="main-product-title"><a href="#">Sed ut perspiciatis unde omnis iste</a></h3>
					<p className="main-product-description"><a href="#">Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed ut perspiciatis unde omnis iste natus error sit voluptatem...</a></p>
					<div className="product-prices">
						<p><span class="price-con">1,25€</span> con IVA</p>
						<p>1,25€ sin IVA</p>
					</div>


			</section>			
    );
  }
}

export default MainProduct;
