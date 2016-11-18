const xor = require('../xor');
const hexToBase64 = require('../hexToBase64');

const x = Buffer.from('1c0111001f010100061a024b53535009181c', 'hex');
const y = Buffer.from('686974207468652062756c6c277320657965', 'hex');

console.log(xor(x, y).toString('hex'));

