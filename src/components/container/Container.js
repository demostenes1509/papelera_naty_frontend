import React, { Component } from 'react';
import SideBar from './SideBar';
import MainContent from './MainContent';

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
