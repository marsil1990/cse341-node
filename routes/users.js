const routesusers = require("express").Router();
const usersController = require("../controllers/users");

routesusers.get("/", usersController.getAll);
routesusers.get("/", usersController.getSingle);
module.exports = routesusers;
