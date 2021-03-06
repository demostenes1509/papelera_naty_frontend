import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { API_URL_STATIC } from 'config';

class MainProduct extends Component {

  render() {
		const { product } = this.props
    return (
			<>
					<Link to={`/${product.category.url}/${product.url}`}>
						{/* <img className="main-product-image" src="/images/product-img1.jpg" alt=""/> */}
						<ProductPicture pictures={product.productspictures}/>
					</Link>
					<h3 className="main-product-title">
						<Link to={`/${product.category.url}/${product.url}`}>{product.name}</Link>
					</h3>
					<p className="main-product-description">
						<Link to={`/${product.category.url}/${product.url}`}>{product.description}</Link>
					</p>
					{product.productsformats && product.productsformats.length>0 &&
						<ProductsFormats formats={product.productsformats}/>
					}
			</>			
    );
	}
}

const ProductsFormats = ({formats}) => (
	<div className="product-prices">
		<p dangerouslySetInnerHTML={{__html: formats[0].retaildescription}}></p>
		<p dangerouslySetInnerHTML={{__html: formats[0].wholesaledescription}}></p>
	</div>
)

const ProductPicture = ({pictures}) => {
	if(pictures && pictures.length>0) {
		return <img className="main-product-image" src={`${API_URL_STATIC}/productspictures/${pictures[0].id}`} alt="" onError={`${API_URL_STATIC}/productspictures/default.jpg`}/>
	}
	return <img className="main-product-image" src={`${API_URL_STATIC}/productspictures/default.jpg`} alt=""/>
}


export default MainProduct;
