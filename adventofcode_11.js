const getFlashes = (energy_levels, steps) => {
    let flashes = 0;
    for (let i = 0; i < steps; i++) {
        let flashing = true;
        //increase energy levels
        energy_levels = energy_levels.map((line) => line.map((el) => el + 1));

        //check flashes
        while (flashing) {
            let hasFlashed = false;
            energy_levels.forEach((line, i) => {
                line.forEach((el, j) => {
                    if (el > 9) {
                        el = 0;
                        ++flashes;
                        hasFlashed = true;
                        if (i > 0) {
                            if (j > 0) energy_levels[i - 1][j - 1]++;
                            energy_levels[i - 1][j]++;
                            if (j < line.length - 1)
                                energy_levels[i - 1][j + 1]++;
                        }
                        if (j > 0) {
                            energy_levels[i][j - 1]++;
                            if (i < energy_levels.length - 1)
                                energy_levels[i + 1][j - 1]++;
                        }
                        if (j < line.length - 1) energy_levels[i][j + 1]++;

                        if (i < energy_levels.length - 1) {
                            energy_levels[i + 1][j]++;
                            if (j < line.length - 1)
                                energy_levels[i + 1][j + 1]++;
                        }
                    }
                });
            });
            flashing = hasFlashed;
        }
    }
    return flashes;
};

module.exports.getFlashes = getFlashes;
