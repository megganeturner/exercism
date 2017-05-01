var PhoneNumber = function (number) {
  this.phoneNumber = number;
};

PhoneNumber.prototype.number = function () {
  var stripped = this.phoneNumber.replace(/[^0-9]/g, '');
  var invalid = '0000000000'
  if (stripped.length > 11 || stripped.length < 10) {
    return invalid;
  } else if (stripped.length === 11) {
    if (stripped.split('')[0] === '1') {
      return stripped.substring(1);
    }
    return invalid;
  }
  return stripped;
};

PhoneNumber.prototype.areaCode = function () {
  return this.phoneNumber.substring(0,3);
};

PhoneNumber.prototype.toString = function () {
  var number = this.phoneNumber;
  return `(${number.slice(0,3)}) ${number.slice(3,6)}-${number.slice(6,10)}`;
};

module.exports = PhoneNumber;
