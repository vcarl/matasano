const { getScore, breakXor } = require('../break1CharXor');
const fs = require('fs');
const readline = require('readline');

const rs = fs.createReadStream('./4data', {encoding: 'utf8'});
const fileLine = readline.createInterface({input: rs});

let bestGuesses = [];

fileLine.on('line', function (line) {
  bestGuesses.push(breakXor(line));
});

fileLine.on('close', () => {
  const x = bestGuesses.reduce(((best, guess) => {
    if (guess.score > best.score) {
      return guess;
    }
    return best;
  }), {score: 0, value: ''});

  console.log('best guess:', x);
});

