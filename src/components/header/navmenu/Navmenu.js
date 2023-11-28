import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./Navmenu.module.css";
import icon1 from "../../../images/shopping-bag.png";
import icon2 from "../../../images/search-icon.png";
import icon3 from "../../../images/toggle-icon.png";

class Navmenu extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }
  menuToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };
  render() {
    const { open } = this.state;
    return (
      <>
        <div className={classes.navbar_container}>
          <p className={classes.logo}>My Shop</p>
          <div className={classes.actions}>
            <p className={classes.login}>login</p>
            <img
              className={classes.icon1}
              src={icon1}
              alt="shop"
            />
            <img
              className={classes.icon2}
              src={icon2}
              alt="search"
            />
            <img
              className={classes.icon3}
              src={icon3}
              alt="menu"
              onClick={this.menuToggle}
            />
          </div>
        </div>
        <div className={open ? classes.show : classes.hide}>
          <p className={classes.menu_item}>
            {" "}
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/"
            >
              Home
            </Link>
          </p>
          <p className={classes.menu_item}>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/shop"
            >
              Shop
            </Link>
          </p>
          <p className={classes.menu_item}>Blog</p>
          <p className={classes.menu_item}>Contact</p>
        </div>
      </>
    );
  }
}

export default Navmenu;
