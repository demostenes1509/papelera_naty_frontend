import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainProduct extends Component {

	// constructor(props) {
	// 	super(props);
	// 	console.log(props);
	// }
	
  render() {
		const { product } = this.props
    return (
			<>
					<Link to={`/${product.category.url}/${product.url}`}>
						<img className="main-product-image" src="/images/product-img1.jpg" alt=""/>
					</Link>
					<h3 className="main-product-title">
						<Link to={`/${product.category.url}/${product.url}`}>{product.name}</Link>
					</h3>
					<p className="main-product-description">
						<Link to={`/${product.category.url}/${product.url}`}>{product.description}</Link>
					</p>
					<ProductsFormats formats={product.productsformats}/>
			</>			
    );
	}
}

const ProductsFormats = (props) => {
	if(props.formats && props.formats.length>0) {
		return <div className="product-prices">
			<p dangerouslySetInnerHTML={{__html: props.formats[0].retaildescription}}></p>
			<p dangerouslySetInnerHTML={{__html: props.formats[0].wholesaledescription}}></p>
		</div>;
	}
	return <></>;
}


export default MainProduct;
