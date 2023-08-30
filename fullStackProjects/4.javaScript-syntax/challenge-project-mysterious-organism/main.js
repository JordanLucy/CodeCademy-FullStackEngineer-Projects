// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      let newBase = returnRandBase();
      let pickRandom = Math.floor(Math.random() * 15);
      do {
        newBase = returnRandBase();
      } while (newBase === this.dna[pickRandom]);
      this.dna[pickRandom] = newBase;
      return this.dna;
    },
    compareDNA(pAequor) {
      let isSame = 0;
      for (let i = 0; i < pAequor.length; i++) {
        if (this.dna[i] === pAequor[i]) {
          isSame++;
        }
      }
      isSame /= 15;
      isSame *= 100;
      console.log(
        `The two strands are ${Number.parseFloat(isSame).toFixed(2)}% the same.`
      );
    },
    willLikelySurvive() {
      let count = 0;
      let somedna = this.dna;
      for (let i = 0; i < somedna.length; i++) {
        if (somedna[i] === "C" || somedna[i] === "G") {
          count += 1;
        }
      }
      count /= 15;
      count *= 100;
      return count >= 60 ? true : false;
    },
  };
};

let pAequor = [];
let newTestStrand;

console.log(pAequor);

const spec34 = pAequorFactory(66, mockUpStrand());
console.log(spec34.dna);
console.log(spec34.mutate());
console.log(spec34.compareDNA(mockUpStrand()));
console.log(spec34.willLikelySurvive());
