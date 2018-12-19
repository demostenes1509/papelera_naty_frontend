import React, { Component } from 'react';

import MainProduct from './MainProduct';

class MainProducts extends Component {
  render() {
    return (
			<div className="main-products">
					<h2 className="main-title">Productos destacados</h2>
					<div className="main-products-list">
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
						<MainProduct />
						<MainProduct />
						<MainProduct />
					</div>
			</div>			
    );
  }
}

export default MainProducts;
