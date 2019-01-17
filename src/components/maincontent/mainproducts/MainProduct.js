import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

const ProductPicture = (props) => {
	if(props.pictures && props.pictures.length>0) {
		const picture=props.pictures[0];
		return <img className="main-product-image" src={`/productspictures/${picture.id}`} alt=""/>
	}
	return <img className="main-product-image" src={`/productspictures/0`} alt=""/>
}


export default MainProduct;
