require("dotenv").config();
const express = require("express");
const monoose = require("mongoose");
const app = express();
const path = require("path");

const homeRoutes = require("./controllers/home");

const cartController = require("./controllers/cart.controller");

app.set("view engine", "ejs"), app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use("/cart", cartController);

monoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("", homeRoutes);
app.use("/cart", cartController);

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server started port ${port}`);
});
