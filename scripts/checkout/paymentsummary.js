import { cart } from '../../data/cart-class.js';
import { getproduct } from '../../data/products.js';
import { getdeliveryOption } from '../../data/deliveryOptions.js';
import { formatcurrency } from '../utils/money.js';
import { addOrder } from '../../data/orders.js';
export function renderpaymentsummary()
{
  let productPriceCents=0;
  let shippingPriceCents=0;
  const total_items=cart.total_item_in_cart();
  cart.cartItems.forEach((cartitem) => {
    const product = getproduct(cartitem.productId);
    productPriceCents+=product.priceCents*cartitem.quantity;

    const deliveryOption = getdeliveryOption(cartitem.deliveryOptionId);
    shippingPriceCents+=deliveryOption.priceCents;
  });
  const totalBeforeTaxCents = productPriceCents+shippingPriceCents;
  const taxCents = (totalBeforeTaxCents*0.1);
  const totalCents = totalBeforeTaxCents + taxCents;
  const paymentSummaryHtml = `
    <div class="payment-summary-title">
      Order Summary
    </div>

    <div class="payment-summary-row">
      <div>Items (${total_items}):</div>
      <div class="payment-summary-money">
        $${formatcurrency(productPriceCents)}
      </div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">
        $${formatcurrency(shippingPriceCents)}
      </div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">
        $${formatcurrency(totalBeforeTaxCents)}
      </div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">
        $${formatcurrency(taxCents)}
      </div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">
        $${formatcurrency(totalCents)}
      </div>
    </div>

    <button class="place-order-button button-primary js-place-order">
      Place your order
    </button>
  `;

  document.querySelector('.js-payment-summary')
    .innerHTML = paymentSummaryHtml;

  document.querySelector('.js-place-order')
    .addEventListener('click',async() => {
      try {
        const response = await fetch('https://supersimplebackend.dev/orders',{
          method:'POST',
          headers:{
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify({
            cart : cart
          })
        });

        const order = await response.json();
        addOrder(order);
      } catch (error) {
        console.log('Unexpected Error . Try Again Later');
      };
      

      window.location.href = 'orders.html';
    });

}