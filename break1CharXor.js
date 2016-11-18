const xor = require('./xor');

const validChar = [' ', "'", 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function getScore(string) {
  return string.split('')
    .reduce((score = 0, x) => validChar.includes(x)? score + 1 : score, 0);
}

function breakXor(inStr) {
  const x = Buffer.from(inStr, 'hex');
  let y = Buffer.alloc(x.length);

  let score = 0;
  let compareScore = 0;
  let value = 'none';

  let j, z;
  for (let i = 0; i < 256; i++) {
    y.fill(String.fromCharCode(i));

    z = xor(x, y).toString();

    compareScore = getScore(z);
    if (compareScore > score) {
      value = z;
      score = compareScore;
    }
  }
  return {score, value};
}

module.exports = {
  breakXor,
  getScore
};
