// Valid Parentheses (The Stack Challenge)
// Input: "({[]})" -> True, "([)]" -> False

function isValid(s) {
    let stack = [];

    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let char of s) {
        if (brackets[char]) {
            stack.push(char);
        }
        else {
            let lastOpen = stack.pop();
            if (brackets[lastOpen] !== char ) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log("Checking '({[]})':", isValid("({[]})")); 
console.log("Checking '([)]':", isValid("([)]"));   
console.log("Checking '{[]}':", isValid("{[]}"));