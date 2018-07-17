var express = require("express");
var bodyParser = require("body-parser");
const massive = require("massive");
require("dotenv").config();
const mc = require("./controller");

var app = express();

app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then(dbInstance =>
  app.set("db", dbInstance)
);

app.get("/api/inventory", mc.getAll);
app.get("/api/inventory/:id", mc.getOne);

const port = 3001;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
