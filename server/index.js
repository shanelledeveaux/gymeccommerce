var express = require("express");
var bodyParser = require("body-parser");
const massive = require("massive");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const session = require("express-session");
const cors = require("cors");
require("dotenv").config();
const mc = require("./controller");

var app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(
  session({
    secret: "meh",
    resave: false,
    saveUninitialized: false
  })
);

massive(process.env.CONNECTION_STRING).then(dbInstance =>
  app.set("db", dbInstance)
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Auth0Strategy(
    {
      domain: process.env.DOMAIN,
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/login",
      scope: "openid email profile"
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  // console.log(user);
  // console.log(req.session);
  app
    .get("db")
    .getuser(user.id)
    .then(response => {
      if (!response[0]) {
        app
          .get("db")
          .adduser([
            user.displayName,
            user.id,
            user.emails[0].value,
            user.picture
          ])
          .then(res => {
            // console.log(res);
            return done(null, res[0]);
          })
          .catch(err => console.log(err));
      } else {
        // console.log(res);
        return done(null, response[0]);
      }
    })
    .catch(err => console.log(err));
});

passport.deserializeUser((user, done) => {
  //This new object will then be passed on to deserializeUser when done is invoked. Since we don't have any additional logic to execute, simply call done with null and obj.
  return done(null, user);
});

app.get(
  "/login",

  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/",
    failureRedirect: "/login"
  })
);

function authenticated(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
}

//PRODUCT ENDPOINTS
app.get("/api/inventory", mc.getAll);
app.get("/api/inventory/:id", mc.getOne);

//CART ENDPOINTS
app.get("/api/cart", mc.addItemToCart);
app.get("/get-user", (req, res) => {
  if (req.user) {
    res.status(200).send(req.user);
  } else {
    res.status(401).send({ message: "Please login" });
  }
});

const port = 3001;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
