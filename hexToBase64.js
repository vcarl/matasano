// a: String
// return: String
module.exports = function hexToBase64(a) {
  return Buffer.from(a, 'hex').toString('base64');
}
