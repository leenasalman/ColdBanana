import React from "react";
import { Button } from "./Button";
import PlantIMG from "../images/plant-img.png";
import './ImageWTextSection.css';

function ImageWTextSection() {
  return (
    <section className="py-4">
      <div className="container">
        <div className="row flex-md-row flex-column">
          <div className="col-md-6 col mb-md-0 mb-5">
            <div className="d-flex flex-column h-100 justify-content-center align-items-md-start align-items-center">
              <h2 className="text-style text-md-left text-center">Lorem ipsum dolor sit amet.</h2>
              <p className="paragraph-style text-md-left text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </p>
              <Button buttonStyle="btn--primary">Read More</Button>
            </div>
          </div>
          <div className="col-md-6 col">
            <img src={PlantIMG} className='plant-image' alt="image of a plant in a pot" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageWTextSection;
