var fib = [0, 1];
const fibo = (n) => {
  if (n === 1) {
    return fib;
  } else {
    for (let i = 2; i <= n; i++) {
      let a;

      a = fib[i - 2] + fib[i - 1];

      fib.push(a);
    }

    return fib;
  }
};

console.log(fibo(12));
