// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

function almostIncreasingSequence(sequence) {
  console.log("first", sequence);
  var removed = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i + 1] - sequence[i] != 1 && sequence[i + 1]) {
      removed += 1;
      var Arr = sequence.splice(i, i + 1);
      console.log("second", Arr);
      almostIncreasingSequence(Arr);
    }
  }
  if (removed < 2) {
      console.log('removed',removed)
    return true;
  } else return false;
}

console.log(almostIncreasingSequence([1, 2, 3, 4, 6, 8]));
