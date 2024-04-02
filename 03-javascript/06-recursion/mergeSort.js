const sortArray = function (nums) {
  return mergeSort(nums, Math.floor(nums.length / 2));
};

const mergeSort = function (arr, m) {
  if (arr.length < 2) {
    return arr;
  }

  const lM = Math.floor(m / 2);
  const left = mergeSort(arr.slice(0, m), lM);
  const right = mergeSort(arr.slice(m), lM + m);
  const res = [];
  while (left.length !== 0 || right.length !== 0) {
    if (left.length === 0 || left[0] > right[0]) {
      res.push(right.shift());
    } else {
      res.push(left.shift());
    }
  }
  return res;
};
