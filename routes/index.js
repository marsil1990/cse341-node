const express = require("express");
// const app = express();
const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = routes;
