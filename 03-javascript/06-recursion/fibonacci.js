const iterative = function (n) {
  let res = n < 2 ? n : 0;
  let prev = 1,
    prevPrev = 0;
  for (let i = 1; i < n; i++) {
    res = prev + prevPrev;
    prevPrev = prev;
    prev = res;
  }
  return res;
};

const recursive = function (n) {
  if (n < 2) {
    return n;
  }
  return recursive(n - 1) + recursive(n - 2);
};
