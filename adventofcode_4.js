const getChosenNumbers = (data) => {
    return data[0].split(",").map(Number);
};

const getBingoBoards = (data) => {
    var re = /\s+/;
    return data.slice(1).map((el) =>
        el.split("\n").map((e) =>
            e
                .trim()
                .split(re)
                .map((e) => {
                    return { number: Number(e), drawn: false };
                })
        )
    );
};

const markNumbersAsDrawn = (boards, number) => {
    return boards.map((board) => {
        board.map((rows) => {
            rows.map((elem) => {
                if (number === elem.number) elem.drawn = true;
            });
        });
    });
};

const rowOrColumnComplete = (boards) => {
    const arrayColumn = (arr, n) =>
        arr.map((x) => {
            return { number: x[n].number, drawn: x[n].drawn };
        });
    const getAllDrawn = (acc, curr) => {
        return acc && curr.drawn;
    };

    for (var i = 0; i < boards.length; i++) {
        for (var j = 0; j < boards[0].length; j++) {
            if (boards[i][j].reduce(getAllDrawn, true)) {
                return { complete: true, board: i };
            }

            var col = arrayColumn(boards[i], j);

            if (col.reduce(getAllDrawn, true)) {
                return { complete: true, board: i };
            }
        }
    }
    return { complete: false, board: i };
};

const getWinningScore = (board, number) => {
    return (
        board.reduce((acc, curr) => {
            const rowSum = curr.reduce((sum, el) => {
                if (!el.drawn) return sum + el.number;
                else return sum;
            }, 0);
            return rowSum + acc;
        }, 0) * number
    );
};

const playBingo = (data) => {
    const numbers = getChosenNumbers(data);
    const boards = getBingoBoards(data);
    for (i = 0; i < numbers.length; i++) {
        // mark the current number on your bingo boards as drawn
        markNumbersAsDrawn(boards, numbers[i]);
        // check for complete row or column
        var c = rowOrColumnComplete(boards);
        // if we have a complete row/column, calculate the score
        if (c.complete) {
            return getWinningScore(boards[c.board], numbers[i]);
        }
    }
};

const updateCompletedStatus = (boards) => {
    var result = [];
    const arrayColumn = (arr, n) =>
        arr.map((x) => {
            return { number: x[n].number, drawn: x[n].drawn };
        });
    const getAllDrawn = (acc, curr) => {
        return acc && curr.drawn;
    };

    for (var i = 0; i < boards.length; i++) {
        for (var j = 0; j < boards[0].length; j++) {
            if (boards[i][j].reduce(getAllDrawn, true)) {
                result.push({ complete: true, board: i });
            }

            var col = arrayColumn(boards[i], j);

            if (col.reduce(getAllDrawn, true)) {
                result.push({ complete: true, board: i });
            }
        }
    }
    return result;
};

const playBingoWithLastWinningBoard = (data) => {
    var completeBoards = [];
    const numbers = getChosenNumbers(data);
    const boards = getBingoBoards(data);
    for (i = 0; i < numbers.length; i++) {
        markNumbersAsDrawn(boards, numbers[i]);
        // check for complete row or column
        var c = rowOrColumnComplete(boards);
        completeBoards = updateCompletedStatus(boards);
        // if we have a complete row/column, calculate the score
        if (c.complete && !completeBoards.some((el) => el.board == c.board)) {
            completeBoards.push({
                board: c.board,
                score: getWinningScore(boards[c.board], numbers[i]),
                number: numbers[i],
            });
        }
    }
    return completeBoards[completeBoards.length - 1].score;
};

module.exports.getChosenNumbers = getChosenNumbers;
module.exports.getBingoBoards = getBingoBoards;
module.exports.markNumbersAsDrawn = markNumbersAsDrawn;
module.exports.rowOrColumnComplete = rowOrColumnComplete;
module.exports.getWinningScore = getWinningScore;
module.exports.playBingo = playBingo;
module.exports.playBingoWithLastWinningBoard = playBingoWithLastWinningBoard;
