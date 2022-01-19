const router = require("express").Router()
const { TaskModel } = require("../models/task.model")

router.get('/', async (req, res) => {
    try {
        const tasks = await TaskModel.find().populate({
            path: 'user',
            select: 'name phone -_id',
        })
        res.json({ error: false, tasks })
    } catch (err) {
        res.status(500).json({ error: true, err })
    }
})

router.post('/', async (req, res) => {
    try {
        const new_to_be_saved = new TaskModel(req.body)
        await new_to_be_saved.save()
        const tasks = await TaskModel.find().populate({
            path: 'user',
            select: 'name _id',
        })
        res.json({ error: false, tasks })
    } catch (err) {
        res.status(500).json({ error: true, err })
    }
})

router.put('/', async (req, res) => {
    try {
        const { id, value } = req.body
        await TaskModel.findByIdAndUpdate(id, { $set: { completed: value } })
        const tasks = await TaskModel.find().populate({
            path: 'user',
            select: 'name _id',
        })
        res.json({ error: false, tasks })
    } catch (err) {
        res.status(500).json({ error: true, err })
    }
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params
    try {
        await TaskModel.deleteOne({ _id: id })
        const tasks = await TaskModel.find().populate({
            path: 'user',
            select: 'name _id',
        })
        res.json({ error: false, tasks })
    } catch (error) {
        res.status(500).json({ err: true, error })
    }
})

module.exports = router