const express = require("express");
const router = express.Router();
const {
  addProperty,
  getProperties,
} = require("../controllers/propertyController");
router.post("/", addProperty);
router.get("/", getProperties);
module.exports = router;