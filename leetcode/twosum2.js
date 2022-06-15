var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i + 1);
  }

  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] < Number.MIN_SAFE_INTEGER) {
      continue;
    }
    let ans = target - nums[i];

    if (map.has(ans)) {
      return [i + 1, map.get(ans)];
    }
  }

  return [];
};

let nums = [2, 7, 11, 15],
  target = 9;

console.log(twoSum(nums, target));
