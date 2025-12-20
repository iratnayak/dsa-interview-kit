function factorialLoop(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result = result * i;
  }

  return result;
}

const number = 5;
console.log(`Factorial of ${number} (Loop):`, factorialLoop(number));
