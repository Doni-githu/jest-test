const { countSheep, sorted } = require('./Sheeps')

describe('Sheeps', () => {
    test('first', () => {
        expect(countSheep(5)).toBe('1 sheep...2 sheep...3 sheep...4 sheep...5 sheep')
    })

    test('type', () => {
        expect(countSheep([5])).toEqual('1 sheep...2 sheep...3 sheep...4 sheep...5 sheep')
    })

    test('type of', () => {
        expect(countSheep(['5'])).toEqual('1 sheep...2 sheep...3 sheep...4 sheep...5 sheep')
    })
})


describe('Sort funtion testing', () => {
    test('first', () => {
        expect(sorted([5, 2, 10, 2])).toEqual([2, 2, 5, 10])
    })

    test('first', () => {
        expect(() => sorted([null, undefined, 10, 2])).toThrow(Error)
    })
});
