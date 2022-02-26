const express = require("express");
const router = express.Router();

const User = require("../models/user.model");

router.get("", async (req, res) => {
  try {
    let user = await User.find({}).lean().exec();

    return res.send(user);
  } catch (error) {
    return res.send(error.message);
  }
});

module.exports = router;
