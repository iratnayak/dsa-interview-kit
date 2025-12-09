// Best Time to Buy and Sell Stock
// Input: prices = [7,1,5,3,6,4]
// Output: 5 (Buy at 1, Sell at 6)

function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }
    return maxProfit;
}

console.log("Test 1:", maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
console.log("Test 2:", maxProfit([7, 6, 4, 3, 1]));    // Output: 0