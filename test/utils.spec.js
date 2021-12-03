const { parseInput, binaryStr2Decimal } = require("../utils");

describe("utility testing", () => {
    test("correct parsed input", () => {
        const filename = "./test/data/testdata1.txt";
        const split = "\n";
        const parsefn = (el) => Number(el);

        const parsedInput = parseInput(filename, parsefn);
        expect(parsedInput.length).toBe(10);
        expect(parsedInput[0]).toBe(199);
    });

    test("binary string to decimal number", () => {
        expect(binaryStr2Decimal("10110")).toBe(22);
        expect(binaryStr2Decimal("01001")).toBe(9);
    });
});
