const express = require("express")
const User = require("../models/user.model")
const { body, validationResult } = require('express-validator');
const router = express.Router()

router.post("", body("first_name").notEmpty().isLength({ min: 2 }, { max: 35 }),
    body("last_name").notEmpty().isLength({ min: 2 }, { max: 35 }),
    body("mobile").isNumeric().notEmpty().isLength({ min: 10 }, { max: 10 }),
    body("email").notEmpty().custom(async value => {
        const user = await User.findOne({email: value})
          if (user) {
            return Promise.reject('E-mail already in use');
          }
       
      }),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                console.log(errors)
              return res.status(400).json({ errors: errors.array() });
            }
            const user = await User.create(req.body)
            return res.send (user)
    } catch (e) {
        console.log(e.message)
    }
})

module.exports = router;