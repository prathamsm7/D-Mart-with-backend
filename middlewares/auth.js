const jwt = require("jsonwebtoken");

const isLoggedIn = (req) => {
  if (req.headers.cookie) {
    let ct = req.headers.cookie.split(";");

    if (ct[0].split("=")) {
      ct = ct[0].split("=")[1];
    } else {
      ct = ct[1].split("=")[1];
    }

    let decoded = jwt.verify(ct, process.env.JWT_SECRET_KEY);
    return decoded;
  }
};
module.exports = isLoggedIn;
