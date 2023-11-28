import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./Showcase.module.css";
import img1 from "../../../images/img-1.png";
class Showcase extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.showcase_text}>
          <h1 className={classes.title}>
            <span className={classes.txt_bold}>50%</span>discount online shop{" "}
          </h1>
          <p className={classes.desc}>
            Epsum factorial non deposit quid pro quo hic escorol. Olypian
            quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus
            carborundum e pluribus unum. Defacto lingo est igpay atinlay.
            Marquee selectus non provisio incongruous feline.
          </p>
          <Link
            to="/shop"
            className={classes.showcase_btn}
          >
            shop now{" "}
          </Link>
        </div>
        <div className={classes.showcase_img}>
          <img
            alt="banner"
            className={classes.img}
            src={img1}
          />
        </div>
      </div>
    );
  }
}

export default Showcase;
