const PhoneBookController = require("./controllers/PhoneBook.controller.js");

const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var router = express.Router();

/**
 * Simple crud routes. CREATE, VIEW, DELETE, UPDATE
 */
router.post("/", PhoneBookController.create);
router.get("/", PhoneBookController.findAll);
router.delete("/:id", PhoneBookController.delete);
router.put("/:id", PhoneBookController.update);
app.use("/api/phoneBook", router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
