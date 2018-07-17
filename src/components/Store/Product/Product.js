import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = props => {
  console.log(props);
  return (
    <div className="product">
      <img className="productimage" src={props.image} />
      <div className="cardinfo">
        <div>{props.name}</div>
        <div>{props.price}</div>
      </div>
      <div className="description">{props.description}</div>
      <Link to={`/store/${props.id}`}>
        <button className="viewproduct">View</button>
      </Link>
    </div>
  );
};

export default Product;
