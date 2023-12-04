const express = require('express')

const router = express.Router()
// import controllers
const itemControllers = require('../controllers/items')
// localhost:4000/todos/items
router.post('/item', itemControllers.createTodo)
router.get('/items', itemControllers.getTodos)
module.exports = router
