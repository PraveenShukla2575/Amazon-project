import { renderOrdersummary } from "./checkout/ordersummary.js";
import { renderpaymentsummary } from "./checkout/paymentsummary.js";
import { loadProducts } from "../data/products.js";
// import '../data/backend-practice.js';

loadProducts(() => {
  renderOrdersummary();
  renderpaymentsummary();
});

