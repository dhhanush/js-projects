var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
      if (nums[i] != nums[i - 1]) {
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
          const sum = nums[i] + nums[j] + nums[k];
          if (sum === 0) {
            result.push([nums[i], nums[j], nums[k]]);
            while (nums[j] == nums[j + 1]) j++;
            while (nums[k] == nums[k - 1]) k--;
            j++;
            k--;
          } else if (sum < 0) {
            j++;
          } else if (sum > 0) {
            k--;
          }
        }
      }
    }
    return result;
  };
};

nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
