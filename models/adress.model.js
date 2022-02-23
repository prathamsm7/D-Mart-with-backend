const mongoose = require("mongoose")

const adressSchema = new mongoose.Schema({
    name: { type: String, require: true },
    mobile: { type: Number, require: true },
    pincode: { type: Number, require: true },
    area: { type: String, require: true },
    adress1: { type: String, require: true },
    adress2: { type: String, require: true },
    landmark:{type: String, require: true}
}, {
    timestamps: true,
    versionkey: false
})

const Adress = mongoose.model("adress", adressSchema)
module.exports = Adress;