const express = require("express");
const router = express.Router();

const formController = require("../controllers/form-controller")

router.get("/", formController.getUser);
router.post("/create-user", formController.createUser)

module.exports = router;
