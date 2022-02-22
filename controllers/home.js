const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
  res.render("home");
});

router.get("/user", (req, res) => {
  res.render("user/user");
});

module.exports = router;
