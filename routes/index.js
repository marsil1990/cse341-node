const routes = require("express").Router();
const lesson1Controllers = require("../controllers/lesson1");

routes.get("/", lesson1Controllers.rootRoute);

routes.get("/home", lesson1Controllers.homeRoute);

module.exports = routes;
