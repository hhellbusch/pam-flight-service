var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/healthz', function(req, res, next) {
  res.send({
    "status":"i am alive"
  });
});

// check to see if seats are available
// for now - just do this randomly
router.get('/seatsAvailable', function(req, res, next){
  // false 10% of the time; true 90% of the time
  let result = Math.random() >= 0.1;
  res.send(result);
});

module.exports = router;
