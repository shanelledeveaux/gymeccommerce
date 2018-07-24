import React, { Component } from "react";
import "./Store.css";
import axios from "axios";
import Product from "./Product/Product";

class Store extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    };
    this.getInventory = this.getInventory.bind(this);
  }
  componentDidMount() {
    this.getInventory();
  }

  getInventory() {
    axios.get(`/api/inventory`).then(res => {
      this.setState({ inventory: res.data });
    });
  }

  render() {
    console.log(this.state);
    const items = this.state.inventory.map((e, i) => {
      return (
        <Product
          key={i}
          id={e.id}
          name={e.name}
          price={e.price}
          description={e.description}
          image={e.imageurl}
        />
      );
    });
    return (
      <div>
        <div className="store">
          Shop By Category:
          <select name="category" onChange={this.handleChange}>
            <option value="protien">Protein</option>
            <option value="clothing">Clothing</option>
            <option value="gym">Gym Accessories</option>
          </select>
        </div>
        <div>
          Sort By:
          <select name="order" onChange={this.handleChange}>
            <option value="priceLTH">Low To High</option>
            <option value="priceHTL">High To Low</option>
            <option value="sale">On Sale</option>
          </select>
        </div>
        <div className="products">{items}</div>
      </div>
    );
  }
}

export default Store;
