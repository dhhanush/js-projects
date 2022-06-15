// var sortArrayByParity = function (nums) {
//   let evens = [];
//   let odds = [];
//   nums.forEach((num) => {
//     if (num % 2 == 0) {
//       evens.push(num);
//     } else {
//       odds.push(num);
//     }
//   });
//   return evens.concat(odds);
// };

var sortArrayByParity = function (nums) {
  let evens = [];
  let odds = [];
  nums.forEach((num, i) => {
    if (num % 2 != 0) {
      [nums[i]];
    }
  });
  return evens.concat(odds);
};

console.log(sortArrayByParity([3, 1, 2, 4]));
