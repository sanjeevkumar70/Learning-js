function memoizedFactorial() {
  const cache = {};

  
  return function fact(n) {
      if (cache[n]) return cache[n];
      
      if (n <= 1) return 1;

      const result = n * fact(n - 1);
      
      cache[n] = result;
      return result;
  };
}

// let t1 = performance.now();
// slowFactorial(30000);   // VERY HEAVY
// let t2 = performance.now();
// console.log("Slow factorial:", t2 - t1, "ms");

let t3 = performance.now();

memoizedFactorial(30000);        // FAST due to caching

let t4 = performance.now();

// console.log("Memoized factorial:", t4 - t3, "ms");
