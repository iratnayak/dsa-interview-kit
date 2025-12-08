// Input: numbers = [2, 7, 11, 15], target = 9
// Output: [0, 1] (Indices of 2 and 7)

function twoSum (num,tar) {
    // create memory box
    const prevMap = new Map();

    for (let i = 0; i < num.length; i++) {
        const n = num[i];
        const e = tar - n; // need other pice

        if (prevMap.has(e)){
            return [prevMap.get(e),i];
        }
        prevMap.set(n, i);
    }

    return [];

}

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
