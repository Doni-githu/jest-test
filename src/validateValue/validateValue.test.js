const validateValue = require('./validateValue')




describe('validateValue', () => {
    test("Validate value", () => {
        expect(validateValue(50)).toBe(true)
    })
    test("Validate value", () => {
        expect(validateValue(-1)).toBe(false)
    })
    test("Validate value", () => {
        expect(validateValue(101)).toBe(false)
    })
    test("Validate value", () => {
        expect(validateValue(100)).toBe(true)
    })
    test("Validate value", () => {
        expect(validateValue(0)).toBe(true)
    })
})