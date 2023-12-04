require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const itemRoutes = require('./routes/item')

const app = express()
app.use(cors())

app.use(express.json())
app.use('/todos', itemRoutes)

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    app.listen(4000, () => {
        console.log('listening on port 4000, connected to DB')
    })
})
.catch((error) => {
    console.log(error)
})