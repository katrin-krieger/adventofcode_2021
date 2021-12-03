const {
    sumArray,
    threeMeasurements,
    addIfIncreased,
} = require("../adventofcode_1");

const testarray = [1, 2, 3, 4];

describe("Day 1: The submarine", () => {
    test("sumArray", () => {
        expect(sumArray(testarray)).toBe(10);
    });

    test("threeMeasurements", () => {
        expect(threeMeasurements(0, 1, 0, testarray)).toBe(1);
    });

    test("addIfIncreased", () => {
        expect(addIfIncreased(0, 1, 0, testarray)).toBe(0);
        expect(addIfIncreased(0, 2, 1, testarray)).toBe(1);
        expect(testarray.reduce(addIfIncreased, 0)).toBe(3);
    });
});
