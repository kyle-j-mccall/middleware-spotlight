const { Router } = require('express');
const red = require('../middleware/red');
const blue = require('../middleware/blue');
// what middleware does this route need to pass?
module.exports = Router().get('/purple', [red, blue], (req, res) => {
  console.log(req.colors);
  res.json(req.colors);
});
