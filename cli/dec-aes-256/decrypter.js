#!/usr/bin/env node
const { scryptSync, createDecipheriv } = require("crypto");
const { Buffer } = require("buffer");

decrypt = (encryptedIv, password) => {
  const { encrypted, iv } = JSON.parse(Buffer.from(encryptedIv, `base64`).toString(`utf8`));
  const algorithm = "aes-256-cbc";
  const key = scryptSync(password, `salt`, 32);
  const ivBuff = Buffer.from(iv, `hex`);
  const decipher = createDecipheriv(algorithm, key, ivBuff);
  const decrypted = decipher.update(encrypted, `hex`, `utf8`) + decipher.final(`utf8`);
  return decrypted;
};

const [nodePath, scriptPath, password, encryptedIv] = process.argv;
console.log(decrypt(encryptedIv, password));
