const express = require('express');
const messages = require('../messages');
const router = express.Router();

//  let messages = [
//   {
//     text: "Hi there!",
//     user: "Amando",
//     added: new Date()
//   },
//   {
//     text: "Hello World!",
//     user: "Charles",
//     added: new Date()
//   }
// ];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', messages: messages });
});

module.exports = router;
// module.exports = {
//   router: router,
//   messages: messages,
// }


// post method
