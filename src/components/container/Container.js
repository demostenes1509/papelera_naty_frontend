import React, { Component } from 'react';
import SideBar from './sidebar/SideBar';
import MainContent from './maincontent/MainContent';
import Authentication from './authentication/Authentication';

class Container extends Component {
  render() {
    /*
    return (
      <section className="container">
        <SideBar />
        <MainContent />
      </section>
    );
    */

   return (
    <section className="container">
      <Authentication />
    </section>
  );


  }
}
 
export default Container;
