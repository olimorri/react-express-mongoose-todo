const express = require('express')
const router = express.Router()
const { getTodos, postTodo } = require('./controllers/todoController.js');

router.get('/todos', getTodos);
router.post('/todos', postTodo);

module.exports = router;