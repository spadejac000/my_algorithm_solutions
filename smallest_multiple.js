// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

// function smallestMult(n) {
//   let x = 1;
//   for(let i = 0; i < n; i++) {
//     while(
//       x % n !== 0 || 
//       x % (n - 1) !== 0 || 
//       x % (n - 2) !== 0 || 
//       x % (n - 3) !== 0 || 
//       x % (n - 4) !== 0
//       ) {
//       x++;
//       if(
//         x % n === 0 && 
//         x % (n - 1) === 0 && 
//         x % (n - 2) === 0 && 
//         x % (n - 3) === 0 && 
//         x % (n - 4) === 0
//         ) {
//           return x;
//       }
//     }
//   }
// }

// smallestMult(5);

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

// function smallestMult(n) {
//   let x = 1;
//   for(let i = 0; i < n; i++) {
//     while(
//       x % n !== 0 || 
//       x % (n - 1) !== 0 || 
//       x % (n - 2) !== 0 || 
//       x % (n - 3) !== 0 || 
//       x % (n - 4) !== 0
//       ) {
//       x++;
//       if(
//         x % n === 0 && 
//         x % (n - 1) === 0 && 
//         x % (n - 2) === 0 && 
//         x % (n - 3) === 0 && 
//         x % (n - 4) === 0
//         ) {
//           return x;
//       }
//     }
//   }
// }

// smallestMult(5);

function smallestMult(n) {
  let min = 1;
  let range = [];

  for(let x = min; x <= n; x++) {
    range.push(x);
  }

  let a = range[0]

  for(let i = 1; i < range.length; i++) {
    let b = range[i];
    let c = a;
    while(a && b) {
      if(a > b) {
        a %= b;
      } else {
        b %= a;
      }
    }
    a = (c * range[i]) / (a + b)
  }
  return a;
}

smallestMult(10);