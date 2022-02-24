const mongoose = require("mongoose")
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name : { type: String, require: true }, 
    mobile: { type: Number, require: true, unique: true },
    email: { type: String, require: true,unique: true },
    password: { type: String, require: true },
    // cart: {type: mongoose.Schema.Types.O}
}, {
    timestamps: true,
    versionkey: false
})


userSchema.pre("save",  function (next){
    if (!this.isModified("password")) return next()
    
    var hash = bcrypt.hashSync(this.password, 8);
    this.password = hash
    return next()
    
})
userSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}
const User = mongoose.model("user", userSchema)

module.exports = User;