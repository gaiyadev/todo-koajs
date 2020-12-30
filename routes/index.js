const UsersController = require('../controllers/UsersController')
var router = require('koa-router')();

// router.get('/', function *(next) {
//   this.body = 'TODO API WITH KOAJ444S3';
//   yield next;  
// });

router.get('/', UsersController.sign_up);

module.exports = router;
