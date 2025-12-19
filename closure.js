function createCounter() {
  let count = 0;

  return function() {
    count++;
    console.log("Count is: ", count);
    
  };
}

const myCounter = createCounter();

console.log(" 1. First Call:");
myCounter();

console.log(" 2. Second Call:");
myCounter();

console.log(" 3. Third Call:");
myCounter();
