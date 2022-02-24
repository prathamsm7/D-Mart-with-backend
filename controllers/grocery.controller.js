const express = require("express")
const router = express()
const Grocery = require("../models/grocery.model")

router.post("", async (req, res) => {
    try {
        console.log(req.body)
        const grocery = await Grocery.create(req.body)
        
        return res.status(200).send(grocery)
    } catch (e) {
        console.log(e.message)
    }
})

router.get("", async (req, res) => {
    try {
        const grocery = await Grocery.find().lean().exec()
        return res.send(grocery)
    } catch (e) {
        console.log(e.message)
    }
})

module.exports = router;