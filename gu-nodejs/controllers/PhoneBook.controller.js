const PhoneBookLine = require("../models/PhoneBookLine.model.js");

/**
 * Using our model, we can create 4 functions to respond to API requests. We use the model to communicate to the DB and respond appropriately.
 */

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const phoneBookLine = new PhoneBookLine({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
  });

  PhoneBookLine.create(phoneBookLine, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the PhoneBookLine.",
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  PhoneBookLine.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving phoneBookLines.",
      });
    else res.send(data);
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  PhoneBookLine.updateById(
    req.params.id,
    new PhoneBookLine(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found PhoneBookLine with id ${req.params.id}.`,
          });
        } else {
          res.status(500).send({
            message: "Error updating PhoneBookLine with id " + req.params.id,
          });
        }
      } else res.send(data);
    }
  );
};

exports.delete = (req, res) => {
  PhoneBookLine.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found PhoneBookLine with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete PhoneBookLine with id " + req.params.id,
        });
      }
    } else res.send({ message: `PhoneBookLine was deleted successfully!` });
  });
};
