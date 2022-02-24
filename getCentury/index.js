function centuryFromYear(year) {
  if (year.toString().length < 4) {
    let a = 4 - year.toString().length;
    year = new Array(a + 1).join("0") + "" + year;
    return calculate(year);
  } else {
    return calculate(year);
  }
}
function calculate(year) {
  let a = year.toString().slice(0, 2);
  let b = year.toString().slice(2, 4);
  if (b > 0) {
    return parseInt(a) + 1;
  } else {
    return parseInt(a);
  }
}

centuryFromYear(190);
