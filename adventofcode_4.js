let completeBoards = [];
let boards;
let numbers;

const playBingo = (data) => {
    numbers = data[0].split(",").map(Number);
    data.shift()
    boards = data.map(board => {
        return board.split("\n").map(row => {
            return row.trim().split(/\s+/).map(elem => {
                return { number: Number(elem), drawn: false };
            })
        })
    });
    for (let i = 0; i < numbers.length; i++) {
        markDrawnNumbers(boards, numbers[i]);
        if (completeBoards.length === boards.length)
            break;
    }
}
const getFirstWinningScore = (data) => {
    playBingo(data);
    return completeBoards[0].score;
}

const getLastWinningScore = (data) => {
    playBingo(data);
    return completeBoards[boards.length - 1].score;
}
const markDrawnNumbers = (boards, number) => {
    boards.forEach((board, index) => {
        board.forEach(row => {
            row.forEach(elem => {
                if (elem.number === number)
                    elem.drawn = true;
            })
        });
        //check if board has complete row or column
        if (isStillIncomplete(index) && hasCompleteRowOrColumn(board))
            completeBoards.push(getScoreAndComplete(board, index, number));
    });
}

const hasCompleteRowOrColumn = (board) => {
    const arrayColumn = (arr, n) =>
        arr.map((x) => {
            return { number: x[n].number, drawn: x[n].drawn };
        });
    const getAllDrawn = (acc, curr) => {
        return acc && curr.drawn;
    };

    for (var j = 0; j < board.length; j++) {
        if (board[j].reduce(getAllDrawn, true)) {
            return true;
        }

        var col = arrayColumn(board, j);

        if (col.reduce(getAllDrawn, true)) {
            return true;
        }
    }
    return false;
};

const getScoreAndComplete = (board, index, number) => {
    const score =
        board.reduce((acc, curr) => {
            const rowSum = curr.reduce((sum, el) => {
                if (!el.drawn) return sum + el.number;
                else return sum;
            }, 0);
            return rowSum + acc;
        }, 0) * number
        ;
    return { boardNumber: index, score: score };
}

const isStillIncomplete = (boardno) => {
    if (completeBoards.length > 0)
        return (!completeBoards.some(cboard =>
            cboard.boardNumber === boardno
        ))
    else
        return true;
}

module.exports.playBingo = playBingo;
module.exports.getFirstWinningScore = getFirstWinningScore;
module.exports.getLastWinningScore = getLastWinningScore;