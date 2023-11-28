import React, { Component } from "react";
import Category from "./category/Category";
import Categories from "./categories/Categories";
import Brands from "./brands/Brands";
// import Countdown from "./countdown/  Countdown";
// import Products from "./products/Products";
class Main extends Component {
  render() {
    return (
      <div>
        <Category></Category>
        <Categories></Categories>
        <Brands></Brands>
        {/* <Countdown></Countdown> */}
        {/* <Products></Products> */}
      </div>
    );
  }
}

export default Main;
