import React, { Component } from "react";
import classes from "./Footer.module.css";
import ins from "../../images/ins-icon.png";
import tw from "../../images/tw-icon.png";
import li from "../../images/li-icon.png";
import fb from "../../images/fb-icon.png";

class Footer extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.row}>
          <p className={classes.element}>Contact Us :</p>
          <div>
            <p className={classes.element}>
              Address : 304 Yundt Rapids,North Malindabury
            </p>
            <p className={classes.element}>Phone : (226) 455-3067 x75552</p>
            <p
              style={{ cursor: "pointer" }}
              className={classes.element}
            >
              E-mail : oveum@nolan.com
            </p>
          </div>
        </div>
        <div className={classes.row}>
          <p>Follow Us :</p>
          <div>
            <img
              className={classes.social}
              src={ins}
              alt="instagram"
            />
            <img
              className={classes.social}
              src={fb}
              alt="facebook"
            />
            <img
              className={classes.social}
              src={tw}
              alt="twitter"
            />
            <img
              className={classes.social}
              src={li}
              alt="linkdin"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
