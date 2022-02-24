function firstDuplicate(a) {
  let b = {};
  a.forEach((item, index) => {
    if (b[item]) {
      b[item] = index;
    } else {
      b[item] = "non repeated";
    }
  });
  console.log(b);
}
