const express = require('express');
let messages = require('../messages');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  // res.send('respond with a resource');
  res.render('form', {});

});

router.post('/', async (req, res) => {
  console.log(req.body);

  const text = await req.body.text;
  const user = await req.body.user;
  const added = new Date();

  if (text && user) {
    messages.push({
      text: text, user: user, added: added
    });
  }
  console.log(messages);
  res.redirect('/');

})

module.exports = router;
