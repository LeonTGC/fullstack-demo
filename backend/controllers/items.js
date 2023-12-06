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

const deleteTodo = async (req, res) => {
    const { id } = req.params

    const todo = await Todo.findByIdAndDelete(id)
    res.status(200).json(todo)
}

const getTodo = async (req, res) => {
    const { id } = req.params

    const todo = await Todo.findById(id)
    res.status(200).json(todo)
}

module.exports = {
    createTodo,
    getTodos,
    deleteTodo,
    getTodo
}



