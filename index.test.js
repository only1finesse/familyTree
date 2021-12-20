const { expect } = require('@jest/globals');
const BritishRoyalFamily = require('.')

describe('British Royal Family Object', () => {

    const newGeneration = new BritishRoyalFamily('Stan', 'Elsie', 'Benson'); 

    test('has name object', () => {
        expect(newGeneration.name).toBe('Stan')
    })

    test('has parents', () => {
        expect(newGeneration.parents).toStrictEqual(['Elsie', 'Benson'])
    })

    test('one parent is valid', () => {
        expect(newGeneration).toHaveProperty('mother')
    })


}) 