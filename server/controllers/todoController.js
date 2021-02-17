const Todo = require('../models/todoModel');

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200);
    res.send(todos)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
}

exports.postTodo = async (req, res) => {
  try {
    await Todo.create(req.body);
    res.sendStatus(201);
    res.send();
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}