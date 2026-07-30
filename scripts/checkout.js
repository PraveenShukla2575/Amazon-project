import { renderOrdersummary } from "./checkout/ordersummary.js";
import { renderpaymentsummary } from "./checkout/paymentsummary.js";
import { loadProducts,loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/backend-practice.js';

//Doing same task using three methods
//Using Promise.all
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then(() => {
  renderOrdersummary();
  renderpaymentsummary();
});

/*
//Using Only promise
new Promise((resolve) => {
  loadProducts(() => {
    resolve();
  });


}).then(() => {
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });


}).then(() => {
  renderOrdersummary();
  renderpaymentsummary();
});
*/

//Using Callback Functions
// loadProducts(() => {
//   loadCart(() => {
//     renderOrdersummary();
//     renderpaymentsummary();
//   });
  
// });

