const express = require("express");
const sha256 = require("js-sha256");

const router = express.Router();
const { encrypt, decrypt } = require("../services/data-encryption");

router.get("/", function (req, res, next) {
  res.render("index", { title: "SecNote" });
});

router.get("/encrypt-data", (req, res) => res.render("encrypt-data-get"));

router.post("/encrypt-data", (req, res) => {
  const { text, password, passhash } = req.body;
  const encrypted = encrypt(text, password);
  res.render("encrypt-data-post", { text, password, encrypted });
});

router.post(`/api/encrypt`, (req, res) => {
  const { decrypted, password, passhash } = req.body;
  const confirmhash = sha256(password);

  if (passhash && passhash.toLowerCase() !== confirmhash.toLowerCase()) {
    return res.json(`Your passhash doesn't match your real password sha256 hash`);
  }

  const encrypted = encrypt(decrypted, password);
  res.json({ encrypted, confirmhash });
});

router.get("/decrypt-data", (req, res) => res.render("decrypt-data-get"));

router.post("/decrypt-data", (req, res) => {
  const { encrypted, password } = req.body;
  const text = decrypt(encrypted, password);
  res.render("decrypt-data-post", { encrypted, password, text });
});

router.post(`/api/decrypt`, (req, res) => {
  const { encrypted, password } = req.body;
  const decrypted = decrypt(encrypted, password);
  res.json({ decrypted });
});

module.exports = router;
