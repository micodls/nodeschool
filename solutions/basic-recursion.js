function reduce(arr, fn, initial) {
    if (arr.length == 0) {
        return initial;
    }

    initial = fn(initial, arr[0]);
    return reduce(arr.slice(1), fn, initial);
}

module.exports = reduce