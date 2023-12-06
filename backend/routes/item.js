const express = require('express')

const router = express.Router()
// import controllers
const itemControllers = require('../controllers/items')

// GET http://localhost:4000/todos/item
router.post('/item', itemControllers.createTodo)

// POST http://localhost:4000/todos/items
router.get('/items', itemControllers.getTodos)

// DELETE
// http://localhost:4000/todos/item/8484756373838754637
router.delete('/item/:id', itemControllers.deleteTodo)

module.exports = router
