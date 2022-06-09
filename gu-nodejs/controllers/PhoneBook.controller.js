const PhoneBookLine = require("../models/PhoneBookLine.model.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a PhoneBookLine
  const phoneBookLine = new PhoneBookLine({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
  });

  // Save PhoneBookLine in the database
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

// Retrieve all PhoneBookLines from the database (with condition).
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

// Update a PhoneBookLine identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  console.log(req.body);

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

// Delete a PhoneBookLine with the specified id in the request
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
