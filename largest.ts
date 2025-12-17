function findLargest(numbers: number[]): number {
    let max = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
  
    return max;
  }
  
  console.log(findLargest([10, 5, 100, 2, 50])); // Output: 100