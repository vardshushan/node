const calculator = require("./../calculator.js");
describe("uppercase", () => {

    test("add(5,4) returns 9", () => {
        expect(calculator.add(5, 4)).toBe(9);
    });

    test("add(5,4) returns 9", () => {
        expect(calculator.subtract(5, 4)).toBe(1);
    });

    test("add(5,4) returns 9", () => {
        expect(calculator.multiply(5, 4)).toBe(20);
    });

    test("add(5,4) returns 9", () => {
        expect(calculator.divide(20, 4)).toBe(5);
    });
});