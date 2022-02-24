
const User = require("../models/user.model")
require("dotenv").config()
const jwt = require("jsonwebtoken")

const token = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
}
const register =async (req, res) => {
    try {
        //find user by email
        let user = await User.findOne({email: req.body.email})
        //if user then err
        if (user) {
            return res.status(400).send("user already exixt")
        }
        //else create user with the data
        user = await User.create(req.body)
        
        //create a token

        const newToken = token(user)
        // return user and token
        return res.send({user, newToken})
        
    } catch (e) {
        console.log(e.message)
    }
}

const login = async (req, res) => {
    try {
        // find user with email
        let user =await User.findOne({email: req.body.email})
        //if not found then error
        if (!user) {
            return res.status(400).send("email or password is invalid")
        }
        //if user found then match the password
        const match = user.checkPassword(req.body.password)
        if (!match) {
            return res.status(400).send("email or password id invalid")
        }
        // create token for user
        const newToken = token(user)
        //return user with token
        return res.send({user, newToken})
        
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = {register, login}