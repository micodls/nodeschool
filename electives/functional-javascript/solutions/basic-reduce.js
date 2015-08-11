function countWords(inputWords) {
    return inputWords.reduce(function(accumulator, current) {
        if (typeof accumulator[current] === 'undefined') {
            accumulator[current] = 1;
        }
        else {
            accumulator[current] += 1;
        }
        return accumulator;
    }, {});
}

module.exports = countWords;
