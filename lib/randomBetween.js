module.exports = function (from, to) {
  if (from && Array.isArray(from)) {
  	if (from.length < 2) throw new Error("Invalid argument from, if from is a Array, it must have 2 element at least");
    to = from[1];
    from = from[0];
  }
  return Math.floor(Math.random()*(to-from))+from;
};