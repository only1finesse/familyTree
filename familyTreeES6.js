class BritishRoyalFamily {
  constructor(name, mother, father) {
    this.name = name;
    this.mother = mother,
    this.father = father
    this.parents = [this.mother, this.father ]
  }


  childOf() {
    // return `Mother : ${this.mother}, Father : ${this.father}`
    return this.parents
  }

}

let newGenerationOne = new BritishRoyalFamily('Prince George',
  'Catherine', 'Prince William');

let newGenerationTwo = new BritishRoyalFamily('Prince Harry', 'Diana', 'Charles');

let newGenerationThree = new BritishRoyalFamily('Prince Andrew', 'Prince Phillip', 'Queen Elizabeth II');

console.log(newGenerationOne.childOf())
console.log(newGenerationOne.parents)
// console.log(newGenerationTwo.childOf())
// console.log(newGenerationThree.childOf())
