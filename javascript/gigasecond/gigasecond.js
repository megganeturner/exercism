var Gigasecond = function (input) {
  this.value = input;
};

Gigasecond.prototype.date = function () {
  return new Date(this.value.getTime() + 1000 * 1000000000);
};

module.exports = Gigasecond;
