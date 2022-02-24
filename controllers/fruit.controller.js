const express = require("express")
const router = express()
const Fruit = require("../models/fruits.model")

router.post("", async (req, res) => {
    try {
        console.log(req.body)
        const fruit = await Fruit.create(req.body)
        
        return res.status(200).send(fruit)
    } catch (e) {
        console.log(e.message)
    }
})

router.get("", async (req, res) => {
    try {
        const fruit = await Fruit.find().lean().exec()
        return res.send(fruit)
    } catch (e) {
        console.log(e.message)
    }
})

module.exports = router;