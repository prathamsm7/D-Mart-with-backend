const mongoose = require("mongoose")
// imgUrl:
// "https://img.dmart.in/images/rwd/products/J/A/N/JAN110000399xx12JAN22_5_P.jpg",
// name: "Premia Sabudana : 1 kg",
// price: 58,
// strikedOffPrice: 73,

const fruitSchema = new mongoose.Schema({
    imgUrl: { type: String, require: true },
    name: { type: String, require: true },
    price: { type: Number, require: true },
    strikedOffPrice:{type: Number, default: 73}
})

const Fruit = mongoose.model("fruit", fruitSchema)

module.exports = Fruit;