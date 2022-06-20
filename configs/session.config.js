const passport = require("passport");
const session = require("express-session");
require("./passport.config");
var MongoStore = require("connect-mongo");
const mongoose = require("mongoose");

module.exports = (app) => {
  // Configuración de sesión
  app.use(
    session({
      secret: "secret",
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
        mongoUrl: process.env.DB_REMOTE,
      }),
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
};
