var sum_to_n_a = function (n) {
  var res = 0;
  for (let i = 1; i <= n; i++) {
    res += i;
  }
  return res;
};

var sum_to_n_b = function (n) {
  if (n == 0) {
    return 0;
  } else {
    return n + sum_to_n_b(n - 1);
  }
};

var sum_to_n_c = function (n) {
  return (n * (n + 1)) / 2;
};

console.log(sum_to_n_a(5));
console.log(sum_to_n_b(5));
console.log(sum_to_n_c(5));
