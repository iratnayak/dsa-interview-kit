// Day 2: Find the Maximum Number in an Array
// Task: Find the largest number without using Math.max()

function findMax(arr) {
    let max = [0]; // First think first number is a max number

    for(let i = 1; i < arr.length; i++) {

        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const number = [10, 20, 30, 10, 60, 100];
console.log("Max Number is: ", findMax(number));
