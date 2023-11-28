import React, { Component } from "react";
import classes from "./Countdown.module.css";
class Countdown extends Component {
  constructor() {
    super();
    this.state = {
      seconds: 3600,
      hour: 0,
      minuet: 0,
      sec: 0,
    };
  }

  Countdown = () => {
    setInterval(() => {
      this.setState({
        hour: Math.floor(this.state.seconds / (60 * 60)),
      });
    }, 1000);
  };

  render() {
    return (
      <div>
        <p className={classes.p}>{this.state.hour}</p>
      </div>
    );
  }
}

export default Countdown;
