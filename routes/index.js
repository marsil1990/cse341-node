const routes = require("express").Router();
const lesson1Controllers = require("../controllers/lesson1");

routes.get("/", lesson1Controllers.marcosRoute);

routes.get("/home", lesson1Controllers.marcosHomeRoute);
routes.get("/another", lesson1Controllers.marcosAnotherRoute);

module.exports = routes;
