// Reverse a String without built-in methods
// Input: "Isuru" -> Output: "urusi"

function reverseStringManual (str) {
    let reverse = "";

    for (let i = str.length - 1; i >= 0; i--){
        reverse = reverse + str[i];
    }

    return reverse;
}

console.log("Original String is: Isuru");
console.log("Reverse is: ", reverseStringManual("Isuru"));

