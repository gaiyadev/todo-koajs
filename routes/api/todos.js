const TodosController = require('../../controllers/TodosController')
var router = require('koa-router')();


router.get('/add', TodosController.add);

module.exports = router;
