const TodosController = require('../../controllers/TodosController')
var router = require('koa-router')({
    prefix: '/api/todos'
});


router.get('/', TodosController.add);

module.exports = router;
