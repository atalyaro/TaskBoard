const router = require("express").Router()
const { UserModel } = require("../models/user.model")

router.get('/', async (req, res) => {
    try {
        const users = await UserModel.find()
        res.json({ error: false, users })
    } catch (err) {
        res.status(500).json({ error: true, err })
    }
})

module.exports = router