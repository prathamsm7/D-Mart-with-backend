const express = require("express")
const Cart = require("../models/cart.model")
const router = express.Router()


router.post("", async (req, res) => {
    try {
        const cart = await Cart.create(req.body)
        return res.send(cart)
    } catch (e) {
        console.log(e.message)
    }
})

module.exports = router;