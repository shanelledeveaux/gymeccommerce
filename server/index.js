var express = require("express");
var bodyParser = require("body-parser");
const massive = require("massive");
require("dotenv").config();

const app = express();

// app.use(bodyParser.json());
// massive(process.env.CONNECTION_STRING).then(dbInstance =>
//   app.set("db", dbInstance)
// );

const port = 3001;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
