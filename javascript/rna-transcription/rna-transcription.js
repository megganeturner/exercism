var DnaTranscriber = function () {
  this.complements = {
    'C':'G',
    'G':'C',
    'T':'A',
    'A':'U'
  }
};

DnaTranscriber.prototype.toRna = function (dna) {
  var rna = [];
  var dna = dna.toUpperCase();
  for (var i = 0; i < dna.length; i++) {
    if (this.complements[dna[i]]) {
      rna[i] = this.complements[dna[i]];
    } else {
      throw 'Invalid input'
    }
  }
  return rna.join('');
};

module.exports = DnaTranscriber;
