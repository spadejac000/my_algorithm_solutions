function fiboEvenSum(n) {
  let arr = [1,2]
  for(let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  let evensArr = arr.filter(arr => arr % 2 === 0);
  return evensArr.reduce((a,b) => a + b);

}

fiboEvenSum(10);