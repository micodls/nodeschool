var args = process.argv
var args = args.slice(2)

var sum = 0
for (var i = args.length - 1; i >= 0; i--) {
    sum += Number(args[i])
};

console.log(sum)