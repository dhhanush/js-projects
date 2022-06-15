var rotate = function (nums, k) {
  let j = k % nums.length;
  while (j !== 0) {
    nums.unshift(...nums.splice(nums.length - 1));
    j--;
  }
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 10));
