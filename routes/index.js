const express = require("express");
const router = express.Router();
const { encrypt, decrypt } = require("../services/data-encryption");

router.get("/", function (req, res, next) {
  res.render("index", { title: "SecNote" });
});

router.get("/encrypt-data", (req, res) => res.render("encrypt-data-get"));

router.post("/encrypt-data", (req, res) => {
  const { text, password } = req.body;
  const encrypted = encrypt(text, password);
  res.render("encrypt-data-post", { text, password, encrypted });
});

router.post(`/api/encrypt`, (req, res) => {
  const { decrypted, password } = req.body;
  const encrypted = encrypt(decrypted, password);
  res.json(encrypted);
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
  res.json(decrypted);
})

module.exports = router;
