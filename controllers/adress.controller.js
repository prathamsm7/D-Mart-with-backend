const express = require("express");
const Adress = require("../models/adress.model")
const { body, validationResult } = require('express-validator');
const router = express.Router()

router.post("",
    body("name").trim().notEmpty().isAlpha('en-US',{ignore: ' '}),
    body("mobile").notEmpty().isMobilePhone(),
    body("pincode").isNumeric().notEmpty().isLength({ min: 6 }, { max: 6 }),
    body("adress1").notEmpty(),
    body("adress1").notEmpty(),
    body("landmark").notEmpty(), async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                console.log(errors)
              return res.status(400).json({ errors: errors.array() });
            } 

            const adress = await Adress.create(req.body)
            return res.send(adress)
        } catch (e) {
            console.log(e.message)
        }
    })
    

module.exports = router;