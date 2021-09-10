const {
  scrypt,
  scryptSync,
  randomFill,
  createCipheriv,
  createDecipheriv,
} = require('crypto');
const { Buffer } = require('buffer');

exports.encrypt = (text, password, callback) => {
  const algorithm = 'aes-192-cbc';
  scrypt(password, 'salt', 24, (err, key) => {
    if (err) throw err;
    randomFill(new Uint8Array(16), (err, iv) => {
      if (err) throw err;

      const cipher = createCipheriv(algorithm, key, iv);

      let encrypted = '';
      cipher.setEncoding('hex');

      cipher.on('data', (chunk) => (encrypted += chunk));
      cipher.on('end', () => callback(encrypted, iv));

      cipher.write(text);
      cipher.end();
    });
  });
};

exports.decrypt = (encrypted, password, iv, callback) => {
  const algorithm = 'aes-192-cbc';

  const key = scryptSync(password, 'salt', 24);
  const decipher = createDecipheriv(algorithm, key, iv);

  let decrypted = '';
  decipher.on('readable', () => {
    while (null !== (chunk = decipher.read())) {
      decrypted += chunk.toString('utf8');
    }
  });
  decipher.on('end', () => {
    callback(decrypted);
  });

  decipher.write(encrypted, 'hex');
  decipher.end();
};
