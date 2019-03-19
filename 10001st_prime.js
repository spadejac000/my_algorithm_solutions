const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

function nthPrime(n) {
  let primes = [];
  let x = 0;
  while(primes.length < n) {
    x++;
    if(isPrime(x)) {
      primes.push(x)
    }
  }
  return primes.pop();
}

console.log(nthPrime(10001));