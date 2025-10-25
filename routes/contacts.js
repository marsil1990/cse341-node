const routesusers = require("express").Router();
const usersController = require("../controllers/contacts");

routesusers.get("/", usersController.getAll);
routesusers.get("/:id", usersController.getSingle);

module.exports = routesusers;
