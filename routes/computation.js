var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const x = req.query.x || Math.random();
  const result_atan2 = Math.atan2(x, 2);
  const result_atanh = Math.atanh(x);
  const result_cbrt = Math.cbrt(x);
  const response = `[Math.atan2] applied to ${x} is ${result_atan2}, [Math.atanh] applied to ${x} is ${result_atanh}, [Math.cbrt] applied to ${x} is ${result_cbrt}`;

  res.send(response);
});

module.exports = router;
