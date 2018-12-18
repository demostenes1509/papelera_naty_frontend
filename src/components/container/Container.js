import React, { Component } from 'react';
import SideBar from './sidebar/SideBar';
import MainContent from './maincontent/MainContent';

class Container extends Component {
  render() {
    return (
      <section className="container">
        <SideBar />
        <MainContent />
      </section>
    );
  }
}
 
export default Container;
