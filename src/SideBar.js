import React, { Component } from 'react';

class SideBar extends Component {
  render() {
    return (
      <section className="container">
        <div className="sidebar">
            <div className="categories-sidebar">
                <p>CATEGORIES</p>
            </div>
            <div className="discounts-sidebar">
                <p>DISCOUNTS</p>
            </div>
            <div className="contact-sidebar">
                <p>CONTACT</p>
            </div>
            <div className="information-sidebar">
                <p>INFORMATION</p>
            </div>
        </div>
      </section>
    );
  }
}

export default SideBar;
