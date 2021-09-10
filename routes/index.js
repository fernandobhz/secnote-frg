const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', { title: 'SecNote' });
});

router.get('/encrypt-data', (req, res) => res.render('encrypt-data-get'));

router.post('/encrypt-data', (req, res) => {
  const { text, password } = req.body;

  res.render('encrypt-data-post', { text, password });
})

module.exports = router;
