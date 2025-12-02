//Check if a string reads the same forward and backward.

function isPalindrome(str){
    const cleanStr = str.toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');

    return cleanStr == reversedStr;
}

// Test Cases
console.log(isPalindrome("madam"));   // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("Level"));   // true
console.log(isPalindrome("Tool"));  // false