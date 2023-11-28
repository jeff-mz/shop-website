import React, { Component } from "react";
import Product from "./product/Product";
import classes from "./Products.module.css";
import product1 from "../../../images/pr-1.jpg";
import product2 from "../../../images/pr-2.jpg";
import product3 from "../../../images/pr-3.jpg";
import product4 from "../../../images/pr-4.jpg";
import product5 from "../../../images/pr-5.jpg";
import product6 from "../../../images/pr-6.jpg";
import product7 from "../../../images/pr-7.jpg";
import product8 from "../../../images/pr-8.jpg";
import { v4 as uuidv4 } from "uuid";
class Products extends Component {
  constructor() {
    super();
    this.state = {
      pr: [],

      products: [
        {
          link: product1,
          price: "100",
          name: "Men's Shirt",
          desc: "Men's white, short sleeve ",
        },
        {
          link: product2,
          price: "110",
          name: "Men's Shirt",
          desc: "Men's white, casual shirt",
        },
        {
          link: product3,
          price: "90",
          name: "Men's Shirt",
          desc: "Men's grey casual shirt",
        },
        {
          link: product4,
          price: "80",
          name: "Men's shirt",
          desc: "Men's black, sleeve Shirt",
        },
        {
          link: product5,
          price: "80",
          name: "Men's shirt",
          desc: "Men's blue, sleeve Shirt",
        },
        {
          link: product6,
          price: "85",
          name: "Women's shirt",
          desc: "Women's grey, casual Shirt",
        },
        {
          link: product7,
          price: "140",
          name: "Men's shirt",
          desc: "Men's sky blue, sleeve Shirt",
        },
        {
          link: product8,
          price: "115",
          name: "Men's shirt",
          desc: "Men's casual, fit Shirt",
        },
      ],
    };
  }
  render() {
    return (
      <>
        <div className={classes.wrapper}>
          {this.state.products.map((data) => {
            return (
              <Product
                key={uuidv4()}
                src={data.link}
                price={data.price}
                name={data.name}
                desc={data.desc}
              ></Product>
            );
          })}
        </div>
      </>
    );
  }
}

export default Products;
