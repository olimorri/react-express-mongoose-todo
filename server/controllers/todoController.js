const Todo = require('../models/todoModel');

exports.getTodos = (req, res) => {
  try {
    const todos = Todo.find({});
    res.sendStatus(200);
    res.send(todos)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
}

exports.postTodo = (req, res) => {
  try {
    Todo.create(req.body);
    res.sendStatus(201);
    res.send();
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}