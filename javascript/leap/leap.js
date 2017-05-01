//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(input) {
  this.date = input;
};

Year.prototype.isLeap = function() {
  if (this.date % 400 === 0 || (this.date % 4 === 0 && this.date % 100 != 0)) {
    return true;
  }
  return false;
};

module.exports = Year;
