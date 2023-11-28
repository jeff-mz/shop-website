import React, { Component } from "react";
import classes from "./Brands.module.css";
import { v4 as uuidv4 } from "uuid";
import brand1 from "../../../images/brand-1.png";
import brand2 from "../../../images/brand-2.png";
import brand3 from "../../../images/brand-3.png";
import brand4 from "../../../images/brand-4.png";
import brand5 from "../../../images/brand-5.png";
import brand6 from "../../../images/brand-6.png";
import brand7 from "../../../images/brand-7.png";
import brand8 from "../../../images/brand-8.png";

class Brands extends Component {
  constructor() {
    super();
    this.state = {
      links: [
        { src: brand1 },
        { src: brand2 },
        { src: brand3 },
        { src: brand4 },
        { src: brand5 },
        { src: brand6 },
        { src: brand7 },
        { src: brand8 },
      ],
    };
  }

  render() {
    return (
      <div className={classes.brands}>
        {this.state.links.map((link) => {
          return (
            <img
              key={uuidv4()}
              className={classes.brand}
              alt="brand"
              src={link.src}
            />
          );
        })}
      </div>
    );
  }
}

export default Brands;
