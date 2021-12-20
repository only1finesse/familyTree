let generationOne = {
    name : "Prince George",
    parents : {
        mother : 'Catherine',
        father : 'Prince William',
    },
    childOf() {
        console.log(this.parents)
    }
}

let generationTwo = {
    name : "Prince Harry",
    parents : {
        mother : 'Diana',
        father : 'Charles',
    },
    childOf() {
        console.log(this.parents)
    }
}

let generationThree = {
    name : "Prince Andrew",
    parents : {
        mother : 'Prince Phillip',
        father : 'Queen Elizabeth II',
    },
    childOf() {
        console.log(this.parents)
    }
}
