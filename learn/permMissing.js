const arr = [3, 1, 5, 2, 3, 6];

const permMissing = () => {
  const sorted = arr.sort((a, b) => {
    return a - b;
  });
  console.log(sorted);
  let missing = null;
  const arrLen = sorted.length;
  for (let i = 0; i < arrLen; i++) {
    if (sorted[i + 1] - sorted[i] !== 1) {
      missing = sorted[i] + 1;
      break;
    }
  }
  return missing;
};

console.log(permMissing());
