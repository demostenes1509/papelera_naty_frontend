import React, { Component } from 'react';

import MainProduct from './MainProduct';
import { connect } from 'react-redux';
import mainProductsActions from './mainProductsActions';
import { withRouter } from "react-router";
import { PropagateLoader } from 'react-spinners';

const override = `
    display: block;
    margin: 0 auto;
		border-color: blue;
		margin-top: 100px;
`;

class MainProducts extends Component {
  render() {

	const { payload, loading, error } = this.props

    return (
			<div className="main-products">
					<h2 className="main-title">{payload.title}</h2>
					<div className="main-products-list">

					{error?<p className="main-products-error-message">{error.message}</p>:''}

					<PropagateLoader
											css={override}
											sizeUnit={"px"}
											size={10}
											color={'#005bbb'}
											loading={loading}
										/>

					{payload.products.map(product => (
						<section key={product.id} className="main-product">
							<MainProduct product={product}/>
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
	loading: state.mainProductsReducer.loading,
	error: state.mainProductsReducer.error
})

const mapDispatchToProps = dispatch => ({
	fetch: (path) => dispatch(mainProductsActions.fetch(path))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainProducts))
