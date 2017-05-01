var Isogram = function (input) {
  this.word = input;
};

Isogram.prototype.isIsogram = function () {
  var strippedWord = this.word.toLowerCase().replace(/[\s-]/g, '');
  if (Array.from(new Set (strippedWord.split(''))).length === strippedWord.length) {
    return true;
  }
  return false;
};

module.exports = Isogram;
