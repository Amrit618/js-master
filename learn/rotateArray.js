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
