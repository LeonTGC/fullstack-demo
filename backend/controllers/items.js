const Todo = require('../models/todo')

const getTodos = async (req, res) => {
    const items = await Todo.find({})

    res.status(200).json(items)
}

const createTodo = async (req, res) => {
    const { text } = req.body
    const todoObject = new Todo({
        text
    })
    const newTodo = await todoObject.save()
    res.status(200).json(newTodo)
}

module.exports = {
    createTodo,
    getTodos
}

