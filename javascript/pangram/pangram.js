var Pangram = function (input) {
  this.sentence = input.toLowerCase();
  this.letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
};

Pangram.prototype.isPangram = function () {
  var common = [];
  for (var i = 0; i < this.letters.length; i++) {
    if (this.sentence.indexOf(this.letters[i]) != -1) {
      common.push(this.letters[i]);
    }
  }
  if (common.length === 26) {
    return true;
  }
  return false
};

module.exports = Pangram;
