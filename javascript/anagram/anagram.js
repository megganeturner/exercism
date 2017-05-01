var Anagram = function (word) {
  this.word = word;
};

Anagram.prototype.matches = function (input = []) {
  var letters = this.word.toLowerCase().split('').sort().join('');
  var matches = [];


  if (typeof input != 'object' ) {
    input = Array.from(arguments)
  }

  for (var i = 0; i < input.length; i++) {
    var word = input[i].toLowerCase().split('').sort().join('')
    if (input[i].toLowerCase() === this.word.toLowerCase()) {
      return matches;
    }
    if (word === letters) {
      matches.push(input[i])
    }
  }
  return matches;
};

module.exports = Anagram;
