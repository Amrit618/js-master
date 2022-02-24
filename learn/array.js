// let temperature = [0, 1, 2, 3, 4];
// // temperature[2] = 5;
// temperature.reverse();
// console.log(temperature);

//ARRAY FROM

// const arr = [1, 2, 3];
// const test = Array.from([1, 2, 3], (x, i) => x + arr[i + 1]);
// console.log(test);

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
const rotateArray = (k) => {
  let i = 0;
  while (i < k) {
    arr.unshift(arr.pop());
    i++;
  }

  return arr;
};

console.log(rotateArray(6));
