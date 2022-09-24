import React from "react";
import { Button } from "./Button";
import './HeroSection.css';
import '../App.css';

function HeroSection() {
  return (
    <section className="main-section-bg">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col">
            <div className="main-header-title-container">
              <h1>Lorem ipsum dolor sit amet.</h1>
              <Button className="hero--btn" buttonStyle="btn--primary" buttonSize='btn--large'>
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
