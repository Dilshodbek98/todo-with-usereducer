/** @format */

function findDupsMiss(arr) {
  arr.sort((a, b) => a - b);
  let x = null;
  let res = [];
  arr.map((item, index, array) => {
    if (item !== array[index + 1] && item + 1 === array[index + 1]) x = item;
    if(item === array[index + 1]) res.push(item)
  });

  return [x, res]
}

console.log(findDupsMiss([10, 9, 8, 9, 6, 1, 2, 4, 3, 2, 5, 5, 3]));