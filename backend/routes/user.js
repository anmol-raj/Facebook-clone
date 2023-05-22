const express = require("express");

const router = express.Router();

router.get("/user", (req, res) => {
  res.send("Welcome from user home");
});

module.exports = router;
