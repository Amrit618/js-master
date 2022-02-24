var th = ["", "thousand", "million", "billion", "trillion"];
var dg = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
//  var dg = ['ek','dui','tin','char', 'panch','cha','saat', 'aath','nau','das'];
var tn = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
var tw = [
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

let numbers = [
  [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ],
  [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ],
  [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ],
  ["", "thousand", "million", "billion", "trillion"],
];

function towords(n) {
  let str = "";
  let x = n.toString().length;
  for (i = 0; i < x; i++) {
    let num = "10";
    let dividor = num.padEnd(i, "0");
    let du = n % parseInt(dividor);

    str = numbers[i][du] + " " + str;
  }
  return str;
}

console.log(towords(555));
