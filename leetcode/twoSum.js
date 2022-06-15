var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], nums[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    let ans = target - nums[i];

    if (map.has(ans)) {
      return [nums[i], ans];
    }
  }

  return [];
};
let nums = [2, 7, 11, 15],
  target = 9;

console.log(twoSum(nums, target));
