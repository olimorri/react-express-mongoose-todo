const router = require('express').Router();
const { getTodos, postTodo } = require('./controllers/todoController.js');

router.get('/todos', getTodos);
router.post('/todos', postTodo);

module.exports = router;