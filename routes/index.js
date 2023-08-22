const express = require('express');
const messages = require('../messages');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', messages: messages });
});

module.exports = router;
