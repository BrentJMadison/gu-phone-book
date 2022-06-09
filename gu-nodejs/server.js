const express = require("express");
const cors = require("cors");
const app = express();
const PhoneBookController = require("./controllers/PhoneBook.controller.js");

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


var router = require("express").Router();

router.post("/", PhoneBookController.create);
router.get("/", PhoneBookController.findAll);
router.delete("/:id", PhoneBookController.delete);
router.put("/:id", PhoneBookController.update);

app.use("/api/phoneBook", router);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
