class BritishRoyalFamily {
    constructor(name, mother, father) {
      this.name = name;
      this.mother = mother,
      this.father = father, 
      this.parents = [mother, father]
    }
  
  
    childOf() {
      // return `Mother : ${this.mother}, Father : ${this.father}`
      return this.parents
    }
  
  }
  
  // let newGenerationOne = new BritishRoyalFamily('Prince George',
  //   'Catherine', 'Prince William');
  
  // let newGenerationTwo = new BritishRoyalFamily('Prince Harry', 'Diana', 'Charles');
  
  // let newGenerationThree = new BritishRoyalFamily('Prince Andrew', 'Prince Phillip', 'Queen Elizabeth II');
  
  // console.log(newGenerationOne.childOf())
  // console.log(newGenerationOne.parents)
  // console.log(newGenerationTwo.childOf())
  // console.log(newGenerationThree.childOf())

  



// let generationOne = {
//     name : "Prince George",
//     parents : {
//         mother : 'Catherine',
//         father : 'Prince William',
//     },
//     childOf() {
//         console.log(this.parents)
//     }
// }

// let generationTwo = {
//     name : "Prince Harry",
//     parents : {
//         mother : 'Diana',
//         father : 'Charles',
//     },
//     childOf() {
//         console.log(this.parents)
//     }
// }

// let generationThree = {
//     name : "Prince Andrew",
//     parents : {
//         mother : 'Prince Phillip',
//         father : 'Queen Elizabeth II',
//     },
//     childOf() {
//         console.log(this.parents)
//     }
// }

module.exports = BritishRoyalFamily; 

