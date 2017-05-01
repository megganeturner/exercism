var Hamming = function () {};

Hamming.prototype.compute = function(str1,str2) {
  var distance = 0;
  if (str1.length === str2.length) {
    for (var i = 0; i < str1.length; i++) {
      str1[i] != str2[i] ? distance +=1 : distance;
    }
    return distance;
  } else {
    throw 'DNA strands must be of equal length.'
  }
}

module.exports = Hamming;
