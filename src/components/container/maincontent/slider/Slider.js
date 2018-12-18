import React, { Component } from 'react';

class Slider extends Component {
  render() {
    return (
        <div className="main-slider">
					<div className="slider-container">
						<ul className="slider-images">
							<li><a href="#"><img src="images/slide-img.png" alt="slide image"></img></a></li>
						</ul>
					</div>
					<div className="slider-btn-container">
						<ul className="slider-btns">
							<li><a href="#">1</a></li>
							<li><a href="#">2</a></li>
							<li><a href="#" className="active-slide">3</a></li>
						</ul>
					</div>
				</div>
    );
  }
}

export default Slider;
