var BeerSong = function () {};

BeerSong.prototype.verse = function (number) {
  var bottlePlural = 'bottles';
  var line = 'Take one down and pass it around'
  var next = {
    number: number - 1,
    bottlePlural: 'bottles'
  };
  if (number === 2) {
    next.bottlePlural = 'bottle';
  } else if (number === 0) {
    number = 'no more';
    line = 'Go to the store and buy some more';
    next.number = 99;
  } else if (number === 1){
    line = 'Take it down and pass it around'
    bottlePlural = 'bottle';
    next.number = 'no more';
  }

  var message = `${number} ${bottlePlural} of beer on the wall, ${number} ${bottlePlural} of beer.\n${line}, ${next.number} ${next.bottlePlural} of beer on the wall.\n`

  return message.charAt(0).toUpperCase() + message.slice(1);
};

BeerSong.prototype.sing = function (top, range = 0) {
  var response = [];
  for (var i = top; i >= range; i--) {
    response.push(this.verse(i));
  }
  return response.join('\n');
};

module.exports = BeerSong;
