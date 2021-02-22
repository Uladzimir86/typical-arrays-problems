
exports.min = function min (array) {
  if (!Array.isArray(array)) return 0;
  let min = 0;
  array.forEach(item => min = (min > item ? item: min));
  return min;
}

exports.max = function max (array) {
  if (!Array.isArray(array)) return 0;
  let max = 0;
  array.forEach(item => max = (max < item ? item: max));
  return max;
}

exports.avg = function avg (array) {
  if (!Array.isArray(array)) return 0;
  let sum = 0;
  array.forEach(item => sum +=item );
  if (array.length == 0) return 0;
    else return sum/array.length;
}
