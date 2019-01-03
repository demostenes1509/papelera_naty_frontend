import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
			<div className="product-detail">
				<section className="product-image-col">
					<div className="product-image-container">
						<a href=""><img src="/images/main-product-img.png" /></a>
						<a href="" className="enlarge-product-btn">Ver mas grande</a>
					</div>
					<div className="product-thumbnail-container">
						<a href="" className="active-thumbnail"><img src="/images/product-thumbnail.png"/></a>
						<a href=""><img src="/images/product-thumbnail.png"/></a> 
						<a href=""><img src="/images/product-thumbnail.png"/></a> 
					</div>
				</section>

				<section className="product-details-col">
					<h2>Bolsa de banditas elasticas</h2>
					<p>Bolsa de banditas elasticas</p>
					<p><span className="product-discount-text">AHORRO del 20% comprando la caja completa.</span></p>
					<div className="product-info-2">

							<div>Envio Gratis</div>
							<div>Entregas 24/72h</div>
							<div>Pago 100% Seguro</div>


						{/* <ul className="info-list">
							<li>Envio Gratis</li>
							<li>Entregas 24/72h</li>
							<li>Pago 100% Seguro</li>
						</ul> */}
					</div>
					<div className="product-content-details">
						<ul>
							<li>Bolsa 10 unid. De 100 grs a $10.00 c/u</li>
							<li>1 Bolsas de $80.00 c/u a $80.00</li>
							<li className="quantity">Cantitdad <input type="text" /><span className="product-price">1,78€</span><a href="" className="add-to-basket">carrito</a></li>
						</ul>
					</div>
					<div className="product-content-details">
						<ul>
							<li>Bolsa 10 unid. De 100 grs a $10.00 c/u</li>
							<li>1 Bolsas de $80.00 c/u a $80.00</li>
							<li className="quantity">Cantitdad <input type="text" /><span className="product-price">1,78€</span><a href="" className="add-to-basket">carrito</a></li>
						</ul>
					</div>
					<div className="product-content-details">
						<ul>
							<li>Bolsa 10 unid. De 100 grs a $10.00 c/u</li>
							<li>1 Bolsas de $80.00 c/u a $80.00</li>
							<li className="quantity">Cantitdad <input type="text" /><span className="product-price">1,78€</span><a href="" className="add-to-basket">carrito</a></li>
						</ul>
					</div>
					<p>IVA includio</p>
				</section>




			</div>			
    );
  }
}

export default Product;
