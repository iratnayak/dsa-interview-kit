// Find Factorial of a Number
// Example: 5! = 5 * 4 * 3 * 2 * 1 = 120

function factorial(n){

    if (n === 0)
        {
        return 0;
    } else if (n === 1){
        return 1;
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i;
    }

    return result;

}

console.log("Factorial of ", factorial(5));
