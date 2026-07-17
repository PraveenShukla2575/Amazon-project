import {cart,removefromcart,total_item_in_cart,calculatecart_quantity,updatequantity, savetostorage} from '../data/cart.js';
import { products } from '../data/products.js';
import formatcurrency  from './utils/money.js';
import { hello } from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import { deliveryOptions } from '../data/deliveryOptions.js';
let cartsummaryHTML='';
updateCartQuantity();
hello();
const today=dayjs();
const delivery_date = today.add(7,'days');
console.log(delivery_date.format('dddd , MMMM D'));
cart.forEach((cartitem) => {
  const productId = cartitem.productId;
  let matchingproduct;
  products.forEach((product) => {
    if(product.id === productId)
    {
      matchingproduct = product ;
    }
  });
  const deliveryOptionId = cartitem.deliveryOptionId;
  let deliveryOption;
  deliveryOptions.forEach((option) => {
    if(option.id === deliveryOptionId)
    {
      deliveryOption = option;
    }
  });
  const today = dayjs();
  const deliverydate = today.add(
    deliveryOption.deliverydays,
    'days'
  );
  const datestring = deliverydate.format(
    'dddd, MMMM D'
  );
  cartsummaryHTML += `
  <div class="cart-item-container js-cart-item-container-${matchingproduct.id}">
      <div class="delivery-date">
        Delivery date: ${datestring}
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
              Quantity: <span class="quantity-label js-quantity-label-${matchingproduct.id}">${cartitem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary js-update-quantity-link"
             data-update-product-id="${matchingproduct.id}">
              Update
            </span>
            <input class="quantity-input js-quantity-input-${matchingproduct.id}">
            <span class="save-quantity-link link-primary js-save-quantity-link"
              data-save-product-id="${matchingproduct.id}" tabindex="0">
              Save
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
          ${deliveryOptionsHtml(matchingproduct,cartitem)}
        </div>
      </div>
    </div>
  `;
});
document.querySelector('.js-order-summary')
  .innerHTML=cartsummaryHTML;
function deliveryOptionsHtml(matchingproduct,cartitem)
{
  let html = '';
  deliveryOptions.forEach((deliveryOption) => {
    const today = dayjs();
    const deliverydate = today.add(
      deliveryOption.deliverydays,
      'days'
    );
    const datestring = deliverydate.format(
      'dddd, MMMM D'
    );
    const pricestring = deliveryOption.priceCents === 0 ? 'FREE':
    `$${formatcurrency(deliveryOption.priceCents)} -` ;
    const isChecked = (deliveryOption.id === cartitem.deliveryOptionId);
    html +=`
      <div class="delivery-option">
        <input type="radio"
          ${isChecked ? 'checked' : ''}
          class="delivery-option-input"
          name="delivery-option-${matchingproduct.id}">
        <div>
          <div class="delivery-option-date">
            ${datestring}
          </div>
          <div class="delivery-option-price">
            ${pricestring} Shipping
          </div>
        </div>
      </div>
    `;
  });
  return html;
}

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
document.querySelectorAll('.js-save-quantity-link')
  .forEach((link) => {
    const saveproductId=link.dataset.saveProductId;
    const handle_save = () => {
      const quantity_input=document.querySelector(`.js-quantity-input-${saveproductId}`)
      const new_quantity = Number(quantity_input.value);
      updatequantity(saveproductId,new_quantity);
      if(new_quantity>0 && new_quantity<1000)
      {
        document.querySelector(`.js-quantity-label-${saveproductId}`)
          .innerHTML=`${new_quantity}`;
        updateCartQuantity();
      }
      const container = document.querySelector(`.js-cart-item-container-${saveproductId}`);
      container.classList.remove('is-editing-quantity');
    };
    link.addEventListener('click',() => {
      handle_save();
    });
    const quantity_input = document.querySelector(`.js-quantity-input-${saveproductId}`);
    if(quantity_input)
    {
      quantity_input.addEventListener('keydown',(event) => {
        if(event.key === 'Enter')
        {
          handle_save();
        }
      });
    }
  }); 

