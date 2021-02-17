const mongoose = require('mongoose');

const todo = new mongoose.Schema({
  content: String,
  timestamp: Number,
  completed: Boolean
});

const Todo = mongoose.model('react-express-mongoose-todo', todo);

module.exports = Todo;