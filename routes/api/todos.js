const TodosController = require('../../controllers/TodosController')
var router = require('koa-router')({
    prefix: '/api/todos'
});


router.post('/', TodosController.add);

router.get('/', TodosController.all_todo)

router.put('/:id',TodosController.update)

router.delete('/:id', TodosController.delete_note)

router.get('/get/:id', TodosController.todo_get_one)

module.exports = router;
