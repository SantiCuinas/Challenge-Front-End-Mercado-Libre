var express = require("express");
var router = express.Router();
var { searchItems, getItem } = require("../controllers/api.controller");

router.get("/items", searchItems);

router.get("/items/:id", getItem);

module.exports = router;
