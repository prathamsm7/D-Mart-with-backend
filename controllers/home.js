const express = require("express");
const jsonwebtoken = require("jsonwebtoken");
const router = express.Router();
const isLoggedIn = require("../middlewares/auth");

router.get("", async (req, res) => {
  try {
    let ct;
    let user;

    if (req.headers.cookie) {
      console.log(req.headers);
      user = isLoggedIn(req);
    } else {
      res.render("signin");
      // user = {
      //   _id: "6218ed0f1b13639c51cf0ea1",
      //   name: "random",
      //   mobile: 2313123123123,
      //   email: "random@d.sd",
      //   password:
      //     "$2a$08$37jSJIpj26jUNs7ENq9zlut77R2QPVsFm1/C0jqIbSKWu8kF6OHsi",
      //   createdAt: "2022-02-25T14:51:59.443Z",
      //   updatedAt: "2022-02-25T14:51:59.443Z",
      //   __v: 0,
      // };
    }

    console.log("user", user);

    return res.render("home", user);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
