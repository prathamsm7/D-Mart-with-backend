const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    serialNo:{ type: Number, require: true },
    // product_url:{ type: String, require: true },
    // product_name: { type: String, require: true }, 
    quantity: { type: Number, require: true },
    pay: { type: Number, require: true },
    productId1: [{ type: mongoose.Schema.Types.ObjectId, ref: "fruit",require: false }],
    productId2: [{ type: mongoose.Schema.Types.ObjectId, ref: "grocery", require: false }],
    userId: {type:  mongoose.Schema.Types.ObjectId, ref: "user"}
    
})

const Cart = mongoose.model("cart", cartSchema)

module.exports = Cart;