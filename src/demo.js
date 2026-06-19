function getCartTotal(cart) {
  let total = 0;

  for (const item of cart) {
    total += item.price;
  }

  return total;
}

const cart = [
  { name: "Notebook", price: 12 },
  { name: "Pen", price: 3 },
];

console.log(`Total: ${getCartTotal(cart)}`);
console.log("Expected: 15");
