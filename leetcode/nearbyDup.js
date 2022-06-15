var containsNearbyDuplicate = function (nums, k) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      if (map.get(nums[i]) <= k - i) {
        return true;
      }
    }
  }

  return false;
};

let nums = [1, 2, 3, 1],
  k = 3;

console.log(containsNearbyDuplicate(nums, k));
