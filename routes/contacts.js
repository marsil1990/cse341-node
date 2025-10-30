const routes = require("express").Router();
const contactsController = require("../controllers/contacts");

routes.get("/", contactsController.getAll);
routes.get("/:id", contactsController.getSingle);
routes.post("/", contactsController.create);
routes.put("/:id", contactsController.updateByid);
routes.delete("/:id", contactsController.deleteByid);

module.exports = routes;
