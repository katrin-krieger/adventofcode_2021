let grid;

const dotsAfterFold = (dots, instructions) => {
    createGrid(getMaxDotVal(dots), dots);
    instructions.forEach(instruction => {
        if (instruction[0] === 'y')
            grid = foldUp(grid, Number(instruction[1]));
        else
            grid = foldLeft(grid, Number(instruction[1]));
    })
    const text = grid.map(array => array.join(' ')).join('\n');
    //console.log(text);
    return countDots(grid);
}

const foldUp = (grid, line) => {
    console.log("foldup: gridlength, line: ", grid.length, line);
    //split array
    let upper = grid.slice(0, line);
    let lower = grid.slice(line + 1).reverse();
    let foldedArray = Array(line).fill().map(() => Array(upper[0].length).fill(0))
    for (let i = 0; i < upper.length; i++) {
        for (let j = 0; j < upper[i].length; j++) {
            foldedArray[i][j] = upper[i][j] || lower[i][j];
        }
    }
    return foldedArray;
}

const foldLeft = (grid, line) => {
    console.log("foldleft: gridlength, line: ", grid.length, line);

    let left = Array()
    let right = Array()
    grid.forEach(row => {
        left.push(row.slice(0, line));
        right.push(row.slice(line + 1));
    })

    let foldedArray = Array(left.length + 1).fill().map(() => Array(line).fill(0))
    for (let i = 0; i < left.length; i++) {
        right[i] = right[i].reverse();
        for (let j = 0; j < left[i].length; j++) {

            foldedArray[i][j] = left[i][j] || right[i][j];
        }
    };
    return foldedArray;
}

const countDots = (grid) => {
    return grid.reduce((acc, row) => {
        const rowSum = row.reduce((acc, elem) => {
            if (elem === 1)
                return ++acc;
            else return acc;
        }, 0);
        return rowSum + acc;
    }, 0);
}
const createGrid = (max, dots) => {
    grid = Array(max[1] + 1).fill().map(() => Array(max[0] + 1).fill(0))

    dots.forEach(pair => {
        grid[pair[1]][pair[0]] = 1;
    });
}

const getMaxDotVal = dots => {
    return dots.reduce((acc, curr) => {
        let max_rows = Math.max(acc[0], curr[0]);
        let max_cols = Math.max(acc[1], curr[1]);
        return [max_rows, max_cols];
    }, [0, 0]);
}
module.exports.dotsAfterFold = dotsAfterFold;