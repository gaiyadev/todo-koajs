const UsersController = require('../controllers/UsersController')
var router = require('koa-router')({
  prefix: '/api/users'

});

// router.get('/', function *(next) {
//   this.body = 'TODO API WITH KOAJ444S3';
//   yield next;  
// });

router.post('/register', UsersController.sign_up);
router.get('/login', UsersController.login);


module.exports = router;
