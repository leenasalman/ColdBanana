import React from "react";
import {Button } from './Button';

function HeroSection() {
  return (
    <div className="main-section-bg">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="main-header-title-container">
              <h1>Lorem ipsum dolor sit amet.</h1>
              <Button className="hero--btn" buttonStyle='btn-primary'>
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
