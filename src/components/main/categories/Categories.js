import React, { Component } from "react";
import classes from "./Categories.module.css";
import { Link } from "react-router-dom";

import product1 from "../../../images/men.jpg";
import product2 from "../../../images/women.jpg";
import product3 from "../../../images/jwellery.jpg";

class Categories extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.pr_category}>
          <img
            className={classes.pr_img}
            src={product1}
            alt="product"
          />
          <h1 className={classes.pr_name}>Men's </h1>
          <button className={classes.pr_btn}>
            <Link
              to="/shop"
              style={{ color: "#333", textDecoration: "none" }}
            >
              See More
            </Link>
          </button>
        </div>
        <div className={classes.pr_category}>
          <img
            className={classes.pr_img}
            src={product2}
            alt="product"
          />
          <h1 className={classes.pr_name}>Women's</h1>
          <button className={classes.pr_btn}>
            <Link
              to="/shop"
              style={{ color: "#333", textDecoration: "none" }}
            >
              See More
            </Link>
          </button>
        </div>
        <div className={classes.pr_category}>
          <img
            className={classes.pr_img}
            src={product3}
            alt="product"
          />
          <h1 className={classes.pr_name}>Jewellers</h1>
          <button className={classes.pr_btn}>
            <Link
              to="/shop"
              style={{ color: "#333", textDecoration: "none" }}
            >
              See More
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Categories;
