class HMACGenerator {
  constructor(cryptoProvider) {
    this.cryptoProvider = cryptoProvider;
  }

  generateHMAC(move, hmacKey) {
    const hmacHash = this.cryptoProvider.createHmac('sha3-256', hmacKey);
    hmacHash.update(move);
    return hmacHash.digest('hex');
  }

  generateKey() {
    return this.cryptoProvider.randomBytes(32).toString('hex');
  }
}

export default HMACGenerator;