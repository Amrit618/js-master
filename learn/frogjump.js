var count = 0;

const jump = (x, y, d) => {
  let position = x;
  if (position < y) {
    position += d;
    count++;
    jump(position, y, d);
  }
  return count;
};

console.log(jump(10, 85, 30));
