var router = require('koa-router')();

router.get('/', function *(next) {
  this.body = 'TODO API WITH KOAJ444S3';
  yield next;  
});


module.exports = router;
