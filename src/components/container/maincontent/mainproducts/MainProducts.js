import React, { Component } from 'react';

import MainProduct from './MainProduct';
import { connect } from 'react-redux'
import mainProductsActions from './mainProductsActions'
import { withRouter } from "react-router";

class MainProducts extends Component {
  render() {

	const { payload, loading } = this.props
	console.log(this.props);

    return (
			<div className="main-products">
					<h2 className="main-title">Productos destacados</h2>
					<div className="main-products-list">

					{payload.offers.map(offer => (
						<section key={offer.id} className="main-product">
							<MainProduct />
						</section>

					))}


						{/* <MainProduct />
						<MainProduct />
						<MainProduct />
						<MainProduct />
						<MainProduct />
						<MainProduct />
						<MainProduct />
						<MainProduct />
						<MainProduct />
						<MainProduct />
						<MainProduct />
						<MainProduct /> */}
					</div>
			</div>			
		);
	}
	
	componentDidMount() {
		this.props.fetch(this.props.location.pathname);
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
