const arry = [1, 3, 8, 2, 7, 35, 53, 24, 58, 79, 66];

function mergeSort(arr) {
  const half = arr.length / 2;

  if (arr.length < 2) {
    return arr;
  }

  const left = arr.splice(0, half);
  merge(mergeSort(left), mergeSort(arr));
}

function merge(left, right) {
  let array = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      array.push(left.shift());
    } else {
      array.shift(right.shift());
    }
  }

  return [...array, ...left, ...right];
}

console.log(mergeSort(arry));
