/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arr2 = arr;
  let arr1 = [];
  arr2.forEach((element) => {
    if (element !== -1) {
      arr1.push(element);
    }
  });
  arr1 = arr1.sort((a, b) => a - b);
  for (let i = arr2.length - 1; i >= 0; i--) {
    if (arr2[i] !== -1) {
      arr2[i] = arr1[arr1.length - 1];
      arr1.pop();
    }
  }

  return arr2;
}

module.exports = sortByHeight;
