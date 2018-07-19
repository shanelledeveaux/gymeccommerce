import React, { Component } from "react";
import "./EachProduct.css";
import axios from "axios";

class EachProduct extends Component {
  constructor() {
    super();
    this.state = {
      item: []
    };
  }

  componentDidMount() {
    axios.get(`/api/inventory/${this.props.match.params.id}`).then(res => {
      this.setState({ item: res.data[0] });
    });
  }

  render() {
    // console.log(this.state);
    console.log(this.state);
    return (
      <div className="productpage">
        <img className="bigproductimg" src={this.state.item.imageurl} />
        <div className="eachproduct_discriptor">
          <div className="eachproduct_title">{this.state.item.name}</div>
          <div className="eachproduct_price">{this.state.item.price}</div>
          <div>{this.state.item.description}</div>
          <button className="addtocart">Add To Cart</button>
        </div>
      </div>
    );
  }
}

export default EachProduct;
