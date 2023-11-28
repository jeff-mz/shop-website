import React, { Component } from "react";
import styled from "styled-components";

const MyDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 1.8rem 0rem;
  div {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    padding: 1rem;
    text-align: center;
    width: 220px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 0px 0px 0px;
      i {
        color: #c78eff;
      }
    }
    i {
      font-size: 3.8rem;
      margin: 1rem 0rem;
      color: #7d3be4;
    }
    p {
      font-size: 18px;
      font-weight: bold;
      text-transform: capitalize;
      color: #595959;
    }
  }
  @media (max-width: 450px) {
    flex-direction: column;
    margin: 4rem 0rem;
    div {
      width: 200px;
      margin: 0.8rem 0rem;
      i {
        font-size: 2rem;
      }
      p {
        font-size: 15px;
      }
    }
  }

  @media (max-width: 1100px) and (min-width: 451px) {
    margin-top: 3.5rem;
    div {
      width: 135px;
      i {
        font-size: 2rem;
      }
      p {
        font-size: 16px;
      }
    }
  }
`;
class Category extends Component {
  render() {
    return (
      <MyDiv>
        <div>
          <i className="fa fa-credit-card"></i>
          <p>pay with credit card</p>
        </div>
        <div>
          <i className="fa fa-truck"></i>
          <p>free delivery</p>
        </div>
        <div>
          <i className="fa fa-check-square-o"></i>
          <p>best price</p>
        </div>
        <div>
          <i className="fa fa-history"></i>
          <p>24 hours money back</p>
        </div>
        <div>
          <i className="fa fa-percent"></i>
          <p>best quality </p>
        </div>
      </MyDiv>
    );
  }
}

export default Category;
