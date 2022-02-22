const express = require("express")
const User = require("../models/user.model")
const router = express.Router()

router.post("", async (req, res) => {
    try {
        const user = await User.create(req.body)
    } catch (e) {
        console.log(e.message)
    }
})

module.exports = router;