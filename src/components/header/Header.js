import React, { Component } from "react";
import styles from "./Header.module.css";
import Navmenu from "./navmenu/Navmenu";
import Showcase from "./showcase/Showcase";
import Search from "./searchbox/Search";
class Header extends Component {
  render() {
    return (
      <div className={styles.header_container}>
        <Navmenu></Navmenu>
        <Showcase></Showcase>
        <Search></Search>
      </div>
    );
  }
}

export default Header;
