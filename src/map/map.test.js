const mapArray = require('./map')

describe('map', () => {
    test('typing', () => {
        expect(mapArray([5, "Doniyor", 6])).toEqual(['5', '6'])
    })
    test('on second', () => {
        expect(mapArray([undefined, 0])).toEqual(['0'])
    })
    test('on threied', () => {
        expect(mapArray([0, 7])).toContain('0')
    })
})