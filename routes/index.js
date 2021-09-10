const express = require('express');
const router = express.Router();
const { encrypt, decrypt } = require('../services/data-encryption');

router.get('/', function (req, res, next) {
  res.render('index', { title: 'SecNote' });
});

router.get('/encrypt-data', (req, res) => res.render('encrypt-data-get'));

router.post('/encrypt-data', (req, res) => {
  const { text, password } = req.body;

  encrypt(password, text, (encrypted, iv) => {
    console.log(iv.constructor.name)
    const encryptedIv = JSON.stringify({encrypted, iv});
    res.render('encrypt-data-post', { text, password, encrypted, iv, encryptedIv });
  });
});

router.get('/decrypt-data', (req, res) => res.render('decrypt-data-get'));

router.post('/decrypt-data', (req, res) => {
  const { encryptedIv, password } = req.body;
  const { encrypted, iv } = JSON.parse(encryptedIv)

  decrypt(encrypted, password, Array.from(iv), (text) => {
    res.render('decrypt-data-post', { encrypted, password, text });
  });
});

module.exports = router;
