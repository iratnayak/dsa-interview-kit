// Day 3: Remove Duplicates from an Array
// Task: Remove duplicate numbers from an array using modern JavaScript (Set).

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

const numbers = [1,2,2,2,3,4,5,5,6,7,8,9,9];

console.log("Original:", numbers);
console.log("Unique:", removeDuplicates(numbers));

