const arr = [1, 1, 3, 4, 3];

const oddEl = () => {
  arr.forEach((element, index) => {
    //   let el = arr[index]
    let ea = element;
    arr.forEach((e, i) => {
      if (i !== index) {
        if (ea == e) {
          console.log(e);
        }
      }
    });
  });
};

console.log(oddEl());

//////////not solved
