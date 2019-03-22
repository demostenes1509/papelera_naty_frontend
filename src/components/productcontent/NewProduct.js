import React, { Component } from 'react';
import { connect } from 'react-redux'
import { PropagateLoader } from 'react-spinners';
import packagingActions from './packagingActions'

class NewProduct extends Component {

	constructor() {
		super();
		this.state = {
			formControls: {
				name: '',
				description: '',
				packaging: 0
			}
		}
		this.changeHandler = this.changeHandler.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	changeHandler(event) {
		const name = event.target.name;
		const value = event.target.value;
		this.setState({
				formControls: {
					[name]: value
				}
		});
	}	

	validateForm() {

		console.log('State:'+this.state);
		console.log('formControls:'+JSON.stringify(this.state.formControls,null,'   '));
		console.log('name:'+this.state.formControls.name);
		console.log('description:'+this.state.formControls.description);

		const isvalid = this.state.formControls.name && 
										this.state.formControls.name.length > 0 && 
										this.state.formControls.description && 
										this.state.formControls.description.length > 0;
		console.log('SE VALIDA !!:'+isvalid);
		return isvalid;
	}	
	
	onClick(event) {
		event.preventDefault();
		console.log('============================');
		// console.log(this.state.formControls.name.length > 0 && this.state.formControls.description.length > 0);
		// console.log(this.state.formControls.name.length);
		// console.log(this.state.formControls.description.length);
		console.log(this.state.formControls);
		console.log('============================');
		// this.props.login(this.state.email, this.state.password);
	}	

	render() {

		const { payload, loading, error } = this.props;

		return (
			<div className="main-content">

				{error?<p className="sidebar-error-message">{error.message}</p>:''}

				<PropagateLoader
											sizeUnit={"px"}
											size={10}
											color={'#005bbb'}
											loading={loading}
										/>				

				<section className="product-image-col">
					<div className="product-image-container">
						<a href=""><img src="/images/main-product-img.png" /></a>
						<a href="" className="enlarge-product-btn">Ver mas grande</a>
					</div>
					<div className="product-thumbnail-container">
						<a href="" className="active-thumbnail"><img src="/images/product-thumbnail.png" /></a>
						<a href=""><img src="/images/product-thumbnail.png" /></a>
						<a href=""><img src="/images/product-thumbnail.png" /></a>
					</div>
				</section>

				<section className="product-details-col">
					<input	type="text" 
									className="product-details-col-name"
									name="name" 
									placeholder="Nombre Producto"
									value={this.state.formControls.name} 
									onChange={this.changeHandler}  />

					<input	type="text" 
									className="product-details-col-description"
									name="description" 
									placeholder="Descripción Producto"
									value={this.state.formControls.description} 
									onChange={this.changeHandler} />

					<select
								name="packaging"
								className="product-details-col-packaging"
								value={this.state.formControls.packaging} 
								onChange={this.changeHandler} >
								<option></option>
						{payload.map(p => (
							<option value={p.id} key={p.id}>{p.name}</option>
						))}
					</select>									


					<button className="save-product" disabled={!this.validateForm()} onClick={this.onClick}>Grabar Producto</button>
					
					{/* <div className="product-info-2">
						<div>Envio Gratis</div>
						<div>Entregas 24/72h</div>
						<div>Pago 100% Seguro</div>
					</div>
					<div className="product-content-details">
						<ul>
							<li>Bolsa 10 unid. De 100 grs a $10.00 c/u</li>
							<li>1 Bolsas de $80.00 c/u a $80.00</li>
							<li className="quantity">Cantidad <input type="text" /><span className="product-price">1,78€</span><a href="" className="add-to-basket">carrito</a></li>
						</ul>
					</div>
					<div className="product-content-details">
						<ul>
							<li>Bolsa 10 unid. De 100 grs a $10.00 c/u</li>
							<li>1 Bolsas de $80.00 c/u a $80.00</li>
							<li className="quantity">Cantidad <input type="text" /><span className="product-price">1,78€</span><a href="" className="add-to-basket">carrito</a></li>
						</ul>
					</div>
					<div className="product-content-details">
						<ul>
							<li>Bolsa 10 unid. De 100 grs a $10.00 c/u</li>
							<li>1 Bolsas de $80.00 c/u a $80.00</li>
							<li className="quantity">Cantidad <input type="text" /><span className="product-price">1,78€</span><a href="" className="add-to-basket">carrito</a></li>
						</ul>
					</div> */}
				</section>
			</div>
		);
	}

	componentDidMount() {
		this.props.fetch();
	}
}

const mapStateToProps = state => ({
	payload: state.packagingReducer.payload,
	loading: state.packagingReducer.loading,
	error: state.packagingReducer.error
})

const mapDispatchToProps = dispatch => ({
	fetch: () => dispatch(packagingActions.fetch())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct)
