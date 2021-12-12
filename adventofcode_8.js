const findEasyDigits = (output) => {
    const d = output.filter(out => {
        return (out.length == 2 || out.length == 3 || out.length == 4 || out.length == 7)
    })
    return d.length;
}

const findAllEasyDigits = (data) => {
    return data.reduce((acc, line) => {
        return acc + findEasyDigits(line[1].trim().split(" "));
    }, 0)
}

module.exports.findEasyDigits = findEasyDigits;
module.exports.findAllEasyDigits = findAllEasyDigits;