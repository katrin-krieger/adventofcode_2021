const getMinimumFuelHorizontalPosition = (data) => {

    let result = data.map(el => {
        return data.reduce((acc, curr) => {
            return acc + Math.abs(el - curr);
        }, 0)
    });
    return (result.reduce((acc, curr) => Math.min(acc, curr), result[0]));
}

const getMinimumFuelHorizontalPosition2 = (data) => {
    let result = Array(data.length);
    let max = Math.max(...data);

    for (let i = 0; i <= max; i++) {
        const fuelUsed = data
            .map((d) => {
                const distance = Math.abs(d - i);
                return (distance * (distance + 1)) / 2;
            })
            .reduce((a, b) => a + b, 0);

        result.push(fuelUsed);
    }
    return (result.reduce((acc, curr) => Math.min(acc, curr), Infinity));
}

module.exports.getMinimumFuelHorizontalPosition = getMinimumFuelHorizontalPosition;
module.exports.getMinimumFuelHorizontalPosition2 = getMinimumFuelHorizontalPosition2;