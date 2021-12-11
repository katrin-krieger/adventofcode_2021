const brackets = [
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
    ["<", ">"],
]

const scores = {
    ")": 3,
    "]": 57,
    "}": 1197,
    ">": 25137
}

const scores2 = {
    ")": 1,
    "]": 2,
    "}": 3,
    ">": 4
}

const isOpeningBracket = (bracket) => {
    return "({[<".split("").some(c => c === bracket);
}
const isClosingBracket = (bracket) => {
    return ")}]>".split("").some(c => c === bracket);
}

const isBracketPair = (b1, b2) => {
    return brackets.filter(e => e[0] === b1 && e[1] === b2).length > 0
}

const getFirstIncompleteChar = (line) => {
    let stack = [];
    for (let i = 0; i < line.length; i++) {
        if (isOpeningBracket(line[i]))
            stack.push(line[i]);
        else if (isClosingBracket(line[i])) {
            var last = stack.pop();
            if (!isBracketPair(last, line[i]))
                return line[i];
        }
    }
    return "";
}

const getScore = (data) => {
    return data.reduce((acc, line) => {
        var c = getFirstIncompleteChar(line);
        return (c != "") ? acc + scores[c] : acc;
    }, 0)
}

const filterCorruptLines = (data) => {
    return data.reduce((acc, line) => {
        if (getFirstIncompleteChar(line) === "")
            acc.push(line);
        return acc;
    }, []);
}

const getClosingChars = (line) => {
    let stack = [];
    for (let i = 0; i < line.length; i++) {
        if (isOpeningBracket(line[i]))
            stack.push(line[i]);
        else if (isClosingBracket(line[i])) {
            stack.pop();
        }
    }
    return stack.reduce((acc, char) => {
        return getClosingBracket(char) + acc;
    }, "");

}

const getClosingBracket = (opening) => {
    for (let i = 0; i < brackets.length; i++) {
        if (brackets[i][0] === opening)
            return brackets[i][1];
    }
}

const getScoreForClosingChars = (data) => {
    const res = filterCorruptLines(data).map(getClosingChars);
    var line_scores = res.map(line => line.split("").reduce((acc, char) => {
        return acc * 5 + scores2[char];
    }, 0));
    return line_scores.sort((a, b) => a - b)[Math.floor(line_scores.length / 2)];
}

module.exports.getFirstIncompleteChar = getFirstIncompleteChar
module.exports.isOpeningBracket = isOpeningBracket;
module.exports.isClosingBracket = isClosingBracket;
module.exports.isBracketPair = isBracketPair;
module.exports.getScore = getScore;
module.exports.filterCorruptLines = filterCorruptLines;
module.exports.getClosingChars = getClosingChars;
module.exports.getScoreForClosingChars = getScoreForClosingChars;