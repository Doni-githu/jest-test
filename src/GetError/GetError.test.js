const GetError = require('./GetError')

describe('Get error', () => {
    test('1', () => {
        expect(() => GetError()).toThrow(Error)
    })

    test('should 2', () => {
        expect(() => GetError()).toThrow(/Error/)
    })

    test('should 2', () => {
        expect(() => GetError()).toThrow('Error')
    })
})