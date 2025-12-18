function createCounter() {
    let count = 0; // This variable is enclosed in the closure

    return function() {
        count++; // Inner function remembers 'count'
        console.log("Count is:", count);
    };
}

const myCounter = createCounter();

console.log("1. First Call:");
myCounter(); // Output: 1

console.log("2. Second Call:");
myCounter(); // Output: 2

console.log("3. Third Call:");
myCounter(); // Output: 3

/* Interview Explanation:
  Even though 'createCounter' has finished executing, 
  the inner function still has access to the 'count' variable.
  This memory preservation is called a 'Closure'.
*/