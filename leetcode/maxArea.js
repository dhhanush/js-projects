var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let result = 0;

  while (l < r) {
    let area = Math.min(height[l], height[r]) * (r - l);
    result = area > result ? area : result;
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return result;
};

height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
