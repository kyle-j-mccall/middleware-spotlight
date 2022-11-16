const { Router } = require('express');
const red = require('../middleware/red');
const blue = require('../middleware/blue');
const yellow = require('../middleware/yellow');
const colors = require('../middleware/colors');
// what middleware does this route need to pass?
module.exports = Router()
  .get('/purple', [red, blue], (req, res) => {
    res.json(req.colors);
  })
  .get('/orange', [red, yellow], (req, res) => {
    res.json(req.colors);
  })
  .get('/green', [yellow, blue], (req, res) => {
    res.json(req.colors);
  })
  .get('/red-orange', [red, red, yellow], (req, res) => {
    res.json(req.colors);
  })
  .get('/blue-green', [blue, blue, yellow], (req, res) => {
    res.json(req.colors);
  });
