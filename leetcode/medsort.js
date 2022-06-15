var findMedianSortedArrays = function (nums1, nums2) {
  let merged = [];

  let i = 0;
  let j = 0;

  while (i < nums1.length || j < nums2.length) {
    if (!isNaN(nums1[i]) && !isNaN(nums2[j])) {
      if (nums1[i] < nums2[j]) {
        merged.push(nums1[i]);
        i++;
      } else {
        merged.push(nums2[j]);
        j++;
      }
      if (nums1[i] == nums2[j]) {
        merged.push(nums1[i]);
        i++;
        merged.push(nums2[j]);
        j++;
      }
    } else if (!isNaN(nums1[i])) {
      merged.push(nums1[i]);
      i++;
    } else if (!isNaN(nums2[j])) {
      merged.push(nums2[j]);
      j++;
    }
  }

  if (merged.length % 2 != 0) {
    return merged[Math.floor(merged.length / 2)];
  } else {
    let med = merged.length / 2;
    return (merged[med] + merged[med - 1]) / 2;
  }
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([0, 0], [0, 0]));
