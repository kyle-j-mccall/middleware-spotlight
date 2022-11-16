const { Router } = require('express');
const red = require('../middleware/red');
const blue = require('../middleware/blue');
const yellow = require('../middleware/yellow');
// what middleware does this route need to pass?
module.exports = Router()
  .get('/purple', [red, blue], (req, res) => {
    console.log(req.colors);
    res.json(req.colors);
  })
  .get('/orange', [red, yellow], (req, res) => {
    res.json(req.colors);
  });
