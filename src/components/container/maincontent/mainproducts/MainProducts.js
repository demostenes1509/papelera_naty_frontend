import React, { Component } from 'react';

import MainProduct from './MainProduct';
import { connect } from 'react-redux'
import mainProductsActions from './mainProductsActions'
import { withRouter } from "react-router";

class MainProducts extends Component {
  render() {

	const { payload, loading } = this.props
	// console.log(this.props);

    return (
			<div className="main-products">
					<h2 className="main-title">Productos destacados</h2>
					<div className="main-products-list">

					{payload.products.map(product => (
						<section key={product.id} className="main-product">
							<MainProduct />
						</section>

					))}
					</div>
			</div>			
		);
	}
	
	componentDidMount() {
		this.props.fetch(this.props.location.pathname);
	}

	componentWillReceiveProps(nextprops) {
		if(this.props.location.pathname!==nextprops.location.pathname) {
			this.props.fetch(nextprops.location.pathname);
		}
	}

}

const mapStateToProps = state => ({
	payload: state.mainProductsReducer.payload,
	loading: state.mainProductsReducer.loading
})

const mapDispatchToProps = dispatch => ({
	fetch: (path) => dispatch(mainProductsActions.fetch(path))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainProducts))
