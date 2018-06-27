var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// check to see if seats are available
// for now - just do this randomly
router.get('/seatsAvailable', function(req, res, next){
  // false 10% of the time; true 90% of the time
  let result = Math.random() >= 0.1;
  let response = {
    "data" : {
      "seatsAvailable" : result
    }
  };
  res.send(response);
});


module.exports = router;
