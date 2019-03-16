// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

function smallestMult(n) {
  let x = 1;
  for(let i = 0; i < n; i++) {
    while(
      x % n !== 0 || 
      x % (n - 1) !== 0 || 
      x % (n - 2) !== 0 || 
      x % (n - 3) !== 0 || 
      x % (n - 4) !== 0
      ) {
      x++;
      if(
        x % n === 0 && 
        x % (n - 1) === 0 && 
        x % (n - 2) === 0 && 
        x % (n - 3) === 0 && 
        x % (n - 4) === 0
        ) {
          return x;
      }
    }
  }
}

smallestMult(5);