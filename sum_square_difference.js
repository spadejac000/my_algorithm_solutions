function sumSquareDifference(n) {
  let arr = [];
  let squaredArr = [];
  for(let i = 1; i <= n; i++) {
    arr.push(i);
    squaredArr.push(Math.pow(i, 2))
  }
  let squareOfSum = Math.pow(arr.reduce((a,b) => {return a + b}), 2)
  let sumOfSquares = squaredArr.reduce((a,b) => {return a + b})
  return squareOfSum - sumOfSquares;
}

sumSquareDifference(100);