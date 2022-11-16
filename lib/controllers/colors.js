const { Router } = require('express');

module.exports = Router()
  .get('/purple', (req, res) => {
    res.json(req.colors);
  })
  .get('/green', (req, res) => {
    res.json(req.colors);
  })
  .get('/orange', (req, res) => {
    res.json(req.colors);
  });
