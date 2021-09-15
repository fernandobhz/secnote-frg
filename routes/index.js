const express = require("express");
const router = express.Router();
const { encrypt, decrypt } = require("../services/data-encryption");

router.get("/", function (req, res, next) {
  res.render("index", { title: "SecNote" });
});

router.get("/encrypt-data", (req, res) => res.render("encrypt-data-get"));

router.post("/encrypt-data", (req, res) => {
  const { text, password } = req.body;

  // todo: transform this function into an async one
  const encrypted = encrypt(text, password);

  console.log(`encrypting`, { encrypted });

  res.render("encrypt-data-post", {
    text,
    password,
    encrypted,
  });
});

router.get("/decrypt-data", (req, res) => res.render("decrypt-data-get"));

router.post("/decrypt-data", (req, res) => {
  const { encrypted, password } = req.body;

  console.log(`decrypting`, { encrypted });

  const text = decrypt(encrypted, password);

  res.render("decrypt-data-post", { encrypted, password, text });
});

module.exports = router;
