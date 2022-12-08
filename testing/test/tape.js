const tape = require("tape");

const calculator = require("./../calculator.js");

tape("tape add integers 1 and 2", (t) => {
    t.plan(1);
    t.equal(calculator.add(1, 2), 3);
});

tape("tape subtract integer 8 and 6", (t) => {
    t.plan(1);
    t.equal(calculator.subtract(8,6),2);
})
tape("tape multiply integer 5 and 4", (t) => {
    t.plan(1);
    t.equal(calculator.multiply(5,4),20);
})
tape("tape divide integer 40 and 5", (t) => {
    t.plan(1);
    t.equal(calculator.divide(40,5),8);
})


