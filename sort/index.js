// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday,
//  each statue having an non-negative integer size. Since he likes to make things perfect,
//  he wants to arrange them from smallest to largest so that each statue will be bigger than the 
// previous one exactly by 1. He may need some additional statues to be able to accomplish that. 
// Help him figure out the minimum number of additional statues needed.

function sortArray(data) {
  var b = data.sort(function(a, b) {
    return a - b;
  });
  console.log(b);
  var c = 0;
  for (let i = 0; i <= b.length; i++) {
    if (b[i + 1] - b[i] != 1 && b[i + 1]) {
      c += b[i + 1] - b[i] - 1;
    }
  }

  console.log(c);
}

sortArray([1,7,4]);
