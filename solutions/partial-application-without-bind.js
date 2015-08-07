var slice = Array.prototype.slice

function logger(namespace) {
  return function() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(namespace);
    console.log.apply(this, args);
  }
}

module.exports = logger