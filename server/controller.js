const axios = require("axios");

//PRODUCTS

const getAll = (req, res, next) => {
  const dbInstance = req.app.get("db");

  dbInstance
    .getproducts()
    .then(response => res.status(200).send(response))
    .catch(console.log);
};

const getOne = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { id } = req.params;
  console.log(id);

  dbInstance
    .getone([id])
    .then(response => res.status(200).send(response))
    .catch(console.log);
};

//CART

const addItemToCart = (req, res, next) => {
  const dbInstance = req.app.get("db");
  // console.log(req.user);
  dbInstance
    .addToCart([req.user.id, req.body.id, req.body.quantity])
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err));
};

module.exports = {
  getAll,
  getOne,
  addItemToCart
};
