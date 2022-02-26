require("dotenv").config();
const jwt = require("jsonwebtoken");

const User = require("../models/user.model");

const token = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    //find user by email
    let user = await User.findOne({ email: req.body.email });
    //if user then err
    if (user) {
      return res.status(400).send("user already exixt");
    }
    //else create user with the data
    user = await User.create(req.body);

    //create a token

    const newToken = token(user);
    // return user and token
    // console.log(user);
    return res.redirect("/login");
  } catch (e) {
    console.log(e);
    return res.redirect("/register");
  }
};

const login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (!user) {
      return alert("email or password is invalid");
    }
    //if user found then match the password
    const match = user.checkPassword(req.body.password);
    if (!match) {
      window.alert("email or password id invalid");
      // return res.status(400).send("email or password id invalid");
    }

    const newToken = token(user);

    res.cookie("token", "");
    res.cookie("token", newToken, {
      expire: new Date() + 9999,
    });

    console.log("user", user);
    res.render("home", { user });
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = { register, login };
