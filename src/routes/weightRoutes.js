const express = require("express");
const { convertWeight } = require("../controllers/weightController");

const router = express.Router();

router.post("/convert", convertWeight);

module.exports = router;

