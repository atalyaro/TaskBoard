const { Schema, model } = require('mongoose')

const taskSchema = new Schema({
    desc: String,
    date: { type: Date, default: Date.now },
    completed: { type: Boolean, default: false },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    }
})

const TaskModel = model('task', taskSchema)

module.exports = { TaskModel }
