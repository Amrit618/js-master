const triangle = (length) => {
  for (let i = 1; i <= length; i++) {
    let t = "";
    for (let j = 1; j <= i; j++) {
      t += "*";
    }
    console.log(t);
  }
};

triangle(13);
