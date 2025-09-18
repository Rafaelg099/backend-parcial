const express = require("express");
const { convertTime } = require("../controllers/timeController");

const router = express.Router();

router.post("/convert", convertTime);

module.exports = router;


