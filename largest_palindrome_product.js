// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two n-digit numbers.

function largestPalindromeProduct(n) {
  let arr = [];
  let x = [];
  let y = [];
  for(let i = 0; i < n; i++) {
    x.push('9');
    y.push('9')
  }
  x = x.join('');
  y = y.join('');
  for(let i = x; i > 0; i--) {
    for(let j = y; j > 0; j--) {
      let product = (i * j).toString();
      let reverseProduct = product.split("").reverse().join("")
      if(product === reverseProduct) {
        arr.push(product);
      }
    }
  }
  let sortedArr = arr.sort((a, b) => a - b);
  return parseInt(sortedArr[sortedArr.length - 1])
}

largestPalindromeProduct(2)
// should return 906609