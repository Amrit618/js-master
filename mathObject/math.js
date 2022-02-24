function maxAdjacent(iarray) {
  var a = [];
  var c = -1000;
  var d = [];
  for (let i = 0; i < iarray.length - 1; i++) {
    var b = iarray[i] * iarray[i + 1];
    a.push(b);
    if (b > c) {
      (c = b), d.pop();
      d.pop();
      d.push(iarray[i]);
      d.push(iarray[i + 1]);
    }
  }
  console.log(`highest product is ${c} and adjacent num are ${d}`);
}

maxAdjacent([-23, 4, -3, 8, -12]);
