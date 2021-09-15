const {
  scryptSync,
  randomBytes,
  createCipheriv,
  createDecipheriv,
} = require('crypto');
const { Buffer } = require('buffer');

exports.encrypt = (text, password) => {
  const algorithm = 'aes-192-cbc';
  const key = scryptSync(password, `salt`, 24);
  const ivBuff = randomBytes(16);
  const cipher = createCipheriv(algorithm, key, ivBuff);
  const encrypted = cipher.update(text, `utf8`, `hex`) + cipher.final(`hex`);
  const iv = ivBuff.toString(`hex`);
  
  const encryptedIv = Buffer.from(JSON.stringify({ encrypted, iv}), `utf8`).toString(`base64`);

  console.log(`Encrypting... Encrypted, iv: `, encrypted, iv);
  return encryptedIv;
};

exports.decrypt = (encryptedIv, password) => {
  const { encrypted, iv } = JSON.parse(Buffer.from(encryptedIv, `base64`).toString(`utf8`));
  console.log(`Decrypting... Encrypted, iv: `, encrypted, iv);
  
  const algorithm = 'aes-192-cbc';
  const key = scryptSync(password, `salt`, 24);
  const ivBuff = Buffer.from(iv, `hex`); 
  const decipher = createDecipheriv(algorithm, key, ivBuff);
  const decrypted = decipher.update(encrypted, `hex`, `utf8`) + decipher.final(`utf8`);

  return decrypted;
};
