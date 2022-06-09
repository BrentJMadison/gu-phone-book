const sql = require("./db.js");

/**
 * Pretty straight forward. Simple model class outlying these 4 properties.
 * In addition, creating 4 methods for communicating CRUD operations to the database.
 */

const PhoneBookLine = function (line) {
  this.id = line.id;
  this.firstName = line.firstName;
  this.lastName = line.lastName;
  this.phoneNumber = line.phoneNumber;
};

PhoneBookLine.create = (newPhoneBookLine, result) => {
  sql.query(
    "INSERT INTO phone_book_line SET ?",
    newPhoneBookLine,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("created line: ", { id: res.insertId, ...newPhoneBookLine });
      result(null, { id: res.insertId, ...newPhoneBookLine });
    }
  );
};

PhoneBookLine.getAll = (result) => {
  let query = "SELECT * FROM phone_book_line";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("lines: ", res);
    result(null, res);
  });
};

PhoneBookLine.updateById = (id, line, result) => {
  sql.query(
    "UPDATE phone_book_line SET firstName = ?, lastName = ?, phoneNumber = ? WHERE id = ?",
    [line.firstName, line.lastName, line.phoneNumber, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated line: ", { id: id, ...line });
      result(null, { id: id, ...line });
    }
  );
};

PhoneBookLine.remove = (id, result) => {
  sql.query("DELETE FROM phone_book_line WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted line with id: ", id);
    result(null, res);
  });
};

module.exports = PhoneBookLine;
