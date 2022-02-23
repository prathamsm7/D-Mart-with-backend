const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");
const Cart = require("../models/cart.model");

// router.post("/addtocart", async (req, res) => {
//   const product = await Product.findById(req.body.id).lean().exec();
//   const findcart = await Cart.find({ product_id: req.body.id }).lean().exec();
//   console.log(findcart);
//   let cart;
//   if (findcart.length > 0) {
//     cart = await Cart.findOneAndUpdate(
//       { product_id: req.body.id },
//       {
//         product_qty: findcart[0].product_qty + 1,
//         total_price: findcart[0].total_price + product.dprice,
//       }
//     );
//   } else {
//     cart = await Cart.create({
//       product_id: req.body.id,
//       product_qty: product.quantity,
//       total_price: product.dprice,
//     });
//   }
//   return res.redirect(`/products/${req.body.id}`);
// });

router.post("", async (req, res) => {
  try {
    await Cart.create(req.body);
    const cart = await cart.find().lean().exec();

    return res.render("user/index.ejs", { cart });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

// router.delete("/delete/:id", async (req, res) => {
//   try {
//     const cart = await Cart.findByIdAndDelete(req.body.id);
//     const scart = await Cart.find()
//       .populate({ path: "product_id" })
//       .lean()
//       .exec();
//     console.log(cart);
//     return res.redirect("cart.ejs", { cartcart: cart });
//     // return res.status(201).send({usercart: cart});
//   } catch (err) {
//     return res.end({ message: err.message });
//   }
// });
module.exports = router;
