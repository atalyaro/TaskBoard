const express = require("express")
const app = express()
const cors = require("cors")
const { connect } = require('./condb')
// const { initiateTeams } = require('./models/user.model')

connect()
// initiateTeams()
app.use(cors())
app.use(express.json())
app.use('/users', require('./routes/users'))
app.use('/tasks', require('./routes/tasks'))

app.listen(1000, () => console.log("server 1000"))