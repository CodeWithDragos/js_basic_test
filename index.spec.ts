const sum = require("./index")

describe("Sums two numbers", () =>{
    test("It can sum 3 and 3 and returns 6", () => {
        const result = sum(3, 3)
        expect(result).toEqual(6)
    })
    // unhappy path
    test("If a is a string should return null", () => {
        const result = sum("3", 3)
        expect(result).toEqual(null)
    })
} )