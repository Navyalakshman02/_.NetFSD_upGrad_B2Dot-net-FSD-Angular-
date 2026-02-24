// cart.js

import { calculateCartTotal } from "./cartUtils.js";

// Product data
const cart = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 50, quantity: 1 },
  { name: "Pencil", price: 5, quantity: 4 }
];

// Invoice lines
const invoice = cart
  .map(
    (item) =>
      `${item.name} - ₹${item.price} x ${item.quantity} = ₹${
        item.price * item.quantity
      }`
  )
  .join("\n");

// Total calculation
const totalAmount = calculateCartTotal(cart);

// Output
console.log(`
Invoice
-------
${invoice}
------------------
Total Amount: ₹${totalAmount}
`);