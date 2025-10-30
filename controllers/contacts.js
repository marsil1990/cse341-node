const mongodb = require("../data/database");
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res) => {
  const result = await mongodb.getDatabase().db().collection("contacts").find();
  result.toArray().then((users) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(users);
  });
};

const getSingle = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDatabase()
    .db()
    .collection("contacts")
    .find({ _id: contactId });
  result.toArray().then((contact) => {
    res.setHeader("content-type", "application/json");
    res.status(200).json(contact[0]);
  });
};

const create = async (req, res) => {
  try {
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;
    if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
      return res.status(400).send({
        message: "Data to create can not be empty!",
      });
    }

    const newContact = { firstName, lastName, email, favoriteColor, birthday };
    const result = await mongodb
      .getDatabase()
      .db()
      .collection("contacts")
      .insertOne(newContact);

    res.status(201).json({
      message: "Contact creatd successefully",
      contactId: result.insertedId,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating contact", error: err.message });
  }
};

const updateByid = async (req, res) => {
  try {
    console.log(req.body);
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!",
      });
    }
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;

    const id = new ObjectId(req.params.id);
    const result = await mongodb
      .getDatabase()
      .db()
      .collection("contacts")
      .updateOne(
        { _id: id },
        { $set: { firstName, lastName, email, favoriteColor, birthday } }
      );

    if (result.matchedCount === 0) {
      res.status(404).send({
        message: `Cannot update Contact with id=${id}. Maybe Contact was not found!`,
      });
    } else res.send({ message: "Contact was updated successfully." });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating contact", error: err.message });
  }
};

const deleteByid = async (req, res) => {
  try {
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDatabase()
      .db()
      .collection("contacts")
      .deleteOne({ _id: contactId });
    if (result.deletedCount === 0) {
      return res.status(404).json({
        message: `Contact with id=${contactId} not found.`,
      });
    }

    res.status(200).json({
      message: "Contact deleted successfully.",
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting contact", error: err.message });
  }
};

module.exports = {
  getAll,
  getSingle,
  updateByid,
  deleteByid,
  create,
};
