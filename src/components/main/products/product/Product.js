import React, { Component } from "react";
import classes from "./Product.module.css";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }

  add = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  minus = () => {
    this.state.number <= 0
      ? this.setState({ number: 0 })
      : this.setState({ number: this.state.number - 1 });
  };
  render() {
    const { price, desc, name } = this.props;
    return (
      <div className={classes.card_wrapper}>
        <img
          src={this.props.src}
          alt="product"
        />
        <div className={classes.infos}>
          <p className={classes.name}>{name}</p>
          <p className={classes.description}>{desc}</p>
          <p className={classes.price}>{price + " $"}</p>
        </div>
        <div className={classes.counter}>
          <i
            onClick={this.minus}
            className="fa fa-minus"
            style={{ fontSize: ".8rem", cursor: "pointer" }}
          ></i>
          <p className={classes.count}>{this.state.number}</p>
          <i
            onClick={this.add}
            className="fa fa-plus"
            style={{ fontSize: ".8rem", cursor: "pointer" }}
          ></i>
        </div>
        <div
          className={this.state.number <= 0 ? classes.hidden : classes.total}
        >
          <span className={classes.total_txt}>Total :</span>
          <span className={classes.total_txt}>
            {this.state.number * Number(price) + " $"}
          </span>
        </div>
      </div>
    );
  }
}

export default Product;
