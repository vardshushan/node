const assert = require("chai").assert;

const calculator = require("./../calculator.js");

describe("Calculator Test", () => {
    describe("add() Test", () => {
        it("add(1,2) should return 3", () => {
            assert.equal(calculator.add(1, 2), 3);
        });
    });

    describe("subtract() Test", () => {
        it("add(8,2) should return 6", () => {
            assert.equal(calculator.subtract(8, 2), 6);
        });
    });

    describe("multiply() Test", () => {
        it("multiply(8,2) should return 16", () => {
            assert.equal(calculator.multiply(8, 2), 16);
        });
    });

    describe("divide() Test", () => {
        it("divide(8,2) should return 4", () => {
            assert.equal(calculator.divide(8, 2), 4);
        });
    });
});