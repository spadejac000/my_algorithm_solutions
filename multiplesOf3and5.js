function multiplesOf3and5(number) {
  let arr = [];
  for(let i = 0; i < number; i = i + 3) {
    if(i > 0) {
      arr.push(i);
    }
  }
  for(let i = 0; i < number; i = i + 5) {
    if(i > 0 && i % 3 !== 0) {
      arr.push(i);
    }
  }
  return arr.reduce((a,b)=>a+b);
}

multiplesOf3and5(49);