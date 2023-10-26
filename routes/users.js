var express = require('express');
var router = express.Router();

let sum = 0;

/* GET users listing. */
router.get('/', function (req, res, next) {
  let more = 1;
  sum += more;
  res.send(`Sum is: ${sum}`);
});

module.exports = router;
