let prices = [15.99, 29.5, 7.25];
let formattedPrices = prices.map((price) => `$${price.toFixed(2)}`);

console.log(formattedPrices);
