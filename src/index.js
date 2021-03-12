// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix === undefined) return [];
  return matrix.reduce(function (acc, item, index) {
    if (index & 1) {
      item.reverse();
    }
    acc.push(...item);
    return acc
  }, []);
}


