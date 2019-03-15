function largestPrimeFactor(number) {
  if(number % 2 !== 0 && number <= 7 || number === 2) {
    return number;
  } else {
    let arr = [];
    for(let i = 0; i < number; i++) {
      if(number % i === 0) {
        arr.push(i);
      }
    }
    let arrOfPrimes = arr.filter((num) => {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    });
    return arrOfPrimes.slice(-1)[0] 
  }
}

largestPrimeFactor(13195);