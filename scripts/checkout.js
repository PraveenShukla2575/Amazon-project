import {cart,removefromcart,total_item_in_cart,calculatecart_quantity} from '../data/cart.js';
import { products } from '../data/products.js';
import { formatcurrency } from './utils/money.js';
let cartsummaryHTML='';
updateCartQuantity();
cart.forEach((cartitem) => {
  const productId = cartitem.productId;
  let matchingproduct;
  products.forEach((product) => {
    if(product.id === productId)
    {
      matchingproduct = product ;
    }
  });
  cartsummaryHTML += `
  <div class="cart-item-container js-cart-item-container-${matchingproduct.id}">
      <div class="delivery-date">
        Delivery date: Tuesday, June 21
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingproduct.image}">

        <div class="cart-item-details">
          <div class="product-name">
            ${matchingproduct.name}
          </div>
          <div class="product-price">
            $${formatcurrency(matchingproduct.priceCents)}
          </div>
          <div class="product-quantity">
            <span>
              Quantity: <span class="quantity-label">${cartitem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary js-update-quantity-link"
             data-update-product-id="${matchingproduct.id}">
              Update
              <input class="quantity-input">
              <span class="save-quantity-link link-primary">Save</span>
            </span>
            <span class="delete-quantity-link link-primary js-delete-link" 
              data-product-id="${matchingproduct.id}">
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          <div class="delivery-option">
            <input type="radio" checked
              class="delivery-option-input"
              name="delivery-option-${matchingproduct.id}">
            <div>
              <div class="delivery-option-date">
                Tuesday, June 21
              </div>
              <div class="delivery-option-price">
                FREE Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-${matchingproduct.id}">
            <div>
              <div class="delivery-option-date">
                Wednesday, June 15
              </div>
              <div class="delivery-option-price">
                $4.99 - Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-${matchingproduct.id}">
            <div>
              <div class="delivery-option-date">
                Monday, June 13
              </div>
              <div class="delivery-option-price">
                $9.99 - Shipping
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  document.querySelector('.js-order-summary')
    .innerHTML=cartsummaryHTML;
});

document.querySelectorAll('.js-delete-link')
  .forEach((link) => {
    link.addEventListener('click',() => {
      const productId = link.dataset.productId;
      removefromcart(productId);
      const container = document.querySelector(`.js-cart-item-container-${productId}`);
      if(container) container.remove();
      updateCartQuantity();
    });
});
function updateCartQuantity()
{
  let cartQuantity = calculatecart_quantity();
  document.querySelector('.js-update-quantity')
    .innerHTML=`${cartQuantity}`;
}
document.querySelectorAll('.js-update-quantity-link')
  .forEach((link) => {
    link.addEventListener('click',() => {
      const updateproductId=link.dataset.updateProductId;
      const container = document.querySelector(`.js-cart-item-container-${updateproductId}`);
      container.classList.add('is-editing-quantity');
    });
});
