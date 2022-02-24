const sum = 1000;

const sumOf = () => {
  let value = 0;
  for (let i = 1; i <= sum; i++) {
    value += i;
  }
  return value;
};

console.log(sumOf());

//FORMULA
//(N/2)* (1+(n))
