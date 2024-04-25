import crypto from 'node:crypto';

class CryptoService {
  createHmac(algorithm, key) {
    return crypto.createHmac(algorithm, key);
  }

  randomBytes(size) {
    return crypto.randomBytes(size);
  }
}

export default CryptoService;