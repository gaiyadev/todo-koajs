const UsersController = require('../../controllers/UsersController')
var router = require('koa-router')({
  prefix: '/api/users'

});


router.get('/', function *(next) {
  this.body = 'TODO API WITH koajs';
  yield next;  
});

//router.post('/register', UsersController.test);

router.post("/register", UsersController.sign_up);

router.post('/login', UsersController.login);


module.exports = router;
