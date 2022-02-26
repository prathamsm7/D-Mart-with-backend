require("dotenv").config();
const express = require("express");
const monoose = require("mongoose");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

const homeRoutes = require("./controllers/home");
const categories = require("./controllers/allCategories");
const productController = require("./controllers/product.controller");
const userRoutes = require("./controllers/user.controller");
const { register, login } = require("./controllers/auth.controller");

app.use(express.json());
app.set("view engine", "ejs"), app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

monoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.get("/register", async (req, res) => {
  res.render("signup");
});
app.post("/register", register);

app.get("/login", async (req, res) => {
  res.render("signin");
});
app.post("/login", login);

app.use("", homeRoutes);

app.use("/categories", categories);
app.use("/users", userRoutes);
app.use("/products", productController);

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server started port ${port}`);
});
