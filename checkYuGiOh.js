const checkYuGiOh = (n) => {
  let arrNum = [];
  if (isNaN(n)) {
    return `Invalid Parameter: ${n}`;
  } else {
    for (let i = 1; i <= n; i++) {
      if (i % 5 == 0 && i % 3 == 0 && i % 2 == 0) {
        arrNum.push("yu-gi-oh");
      } else if (i % 5 == 0 && i % 3 == 0) {
        arrNum.push("gi-oh");
      } else if (i % 5 == 0 && i % 2 == 0) {
        arrNum.push("yu-oh");
      } else if (i % 3 == 0 && i % 2 == 0) {
        arrNum.push("yu-gi");
      } else if (i % 5 == 0) {
        arrNum.push("oh");
      } else if (i % 3 == 0) {
        arrNum.push("gi");
      } else if (i % 2 == 0) {
        arrNum.push("yu");
      } else {
        arrNum.push(i);
      }
    }
    return arrNum;
  }
};

console.log(checkYuGiOh("fizzbuh is meh"));
