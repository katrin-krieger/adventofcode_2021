const {
    sumArray,
    threeMeasurements,
    addIfIncreased,
} = require("../adventofcode_1");

const testarray = [1, 2, 3];

test("sumArray", () => {
    expect(sumArray(testarray)).toBe(6);
});

test("threeMeasurements", () => {});

test("addIfIncreased", () => {
    expect(addIfIncreased(0, 1, 0, testarray)).toBe(0);
    expect(addIfIncreased(0, 2, 1, testarray)).toBe(1);
    expect(testarray.reduce(addIfIncreased, 0)).toBe(2);
});
