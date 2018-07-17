const axios = require("axios");

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

module.exports = {
  getAll,
  getOne
};
