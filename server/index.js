var express = require("express");
var bodyParser = require("body-parser");
const massive = require("massive");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
// const express = require("express");
const session = require("express-session");
require("dotenv").config();
const mc = require("./controller");

var app = express();

app.use(
  session({
    secret: "meh",
    resave: false,
    saveUninitialized: false
  })
);

app.use(bodyParser.json());
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
  console.log(user);
  app
    .get("db")
    .get_user(user.id)
    .then(response => {
      if (!response[0]) {
        app
          .get("db")
          .add_user([user.displayName, user.id, user.emails[0].value])
          .then(res => {
            return done(null, res[0]);
          })
          .catch(err => console.log(err));
      } else {
        return done(null, response[0]);
      }
    })
    .catch(err => console.log(err));
});

passport.deserializeUser((obj, done) => {
  //This new object will then be passed on to deserializeUser when done is invoked. Since we don't have any additional logic to execute, simply call done with null and obj.
  done(null, obj);
});

app.get(
  "/login",
  //We'll want to call passport.authenticate and pass in a strategy type and configuration object. The strategy type will be 'auth0' since we are using an auth0 strategy.
  passport.authenticate(
    "auth0",
    //Then, in the configuration object we can specify the success and failure redirects, turn failure flash on, and force the connection type to GitHub. We can do all of these by using the following properties in the configuration object: successRedirect, failureRedirect, and connection. The success redirect should go to '/students'; The failure redirect should go to '/login'; The connection should be set to 'github'.
    {
      successRedirect: "/students",
      failtureRedirect: "/login",
      connection: "github"
    }
  )
);

function authenticated(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
}

app.get("/api/inventory", mc.getAll);
app.get("/api/inventory/:id", mc.getOne);

const port = 3001;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
