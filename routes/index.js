const express = require("express");
// const app = express();
const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.send("Hello World");
});

routes.use("/users", require("./users"));

module.exports = routes;
