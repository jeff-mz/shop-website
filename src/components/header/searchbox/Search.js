import React, { Component } from "react";
import classes from "./Search.module.css";

class Search extends Component {
  render() {
    return (
      <div className={classes.search_box}>
        <select className={classes.search_options}>
          <option value='all'>All</option>
          <option value='shirts' >Shirts</option>
          <option value='women' >Women</option>
          <option value='men' >Men</option>
        </select>
            <input
                placeholder="Enter Keywords"
          className={classes.search_input}
          type="search"
        />
        <p className={classes.search_btn}>Search</p>
      </div>
    );
  }
}

export default Search;
