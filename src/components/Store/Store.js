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
    return <div className="store">{items}</div>;
  }
}

export default Store;
