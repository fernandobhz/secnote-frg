const { scryptSync, randomBytes, createCipheriv } = require("crypto");
const { Buffer } = require("buffer");

encrypt = (text, password) => {
  const algorithm = "aes-256-cbc";
  const key = scryptSync(password, `salt`, 32);
  const ivBuff = randomBytes(16);
  const cipher = createCipheriv(algorithm, key, ivBuff);
  const encrypted = cipher.update(text, `utf8`, `hex`) + cipher.final(`hex`);
  const iv = ivBuff.toString(`hex`);
  const encryptedIv = Buffer.from(JSON.stringify({ encrypted, iv }), `utf8`).toString(`base64`);
  return encryptedIv;
};

const [nodePath, scriptPath, password, ...text] = process.argv;
console.log(encrypt(text.join(' '), password));
