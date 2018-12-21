import React, { Component } from 'react';
import SideBar from './sidebar/SideBar';
import ProductContent from './productcontent/ProductContent';

class HomePageContainer extends Component {
  render() {
    return (
      <section className="container">
        <SideBar />
        <ProductContent />
      </section>
    );
  }
}
 
export default HomePageContainer;
