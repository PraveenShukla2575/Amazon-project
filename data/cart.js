export let cart = JSON.parse(localStorage.getItem('cart'));
if(!cart)
{
  cart = [{
  productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity:2,
  deliveryOptionId : '1'
  },
  {
    productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity:1,
    deliveryOptionId : '2'
  }];
}

export function savetostorage()
{
  localStorage.setItem('cart',JSON.stringify(cart));
}
export function addtocart(productId)
{
  const quantity_to_add = document.querySelector(`.js-quantity-selector-${productId}`).value;
  let matchingitem;
  cart.forEach((cartitem) => {
    if(productId === cartitem.productId)
    {
      matchingitem=cartitem;
    }
  });
  if(matchingitem)
  {
    matchingitem.quantity+=Number(quantity_to_add);
  }
  else
  {
    cart.push({
    productId:productId,
    quantity:Number(quantity_to_add),
    deliveryOptionId : '1'
    });
  }
  savetostorage();
}
export function removefromcart(productId)
{
  const newCart = [];
  cart.forEach((cartitem) => {
    if(cartitem.productId != productId)
    {
      newCart.push(cartitem);
    }
  });
  cart = newCart;
  savetostorage();
}
export function total_item_in_cart()
{
  let total_items=0;
  cart.forEach((cartitem) => {
    total_items+=Number(cartitem.quantity);
  });
  return total_items;
}
export function calculatecart_quantity()
{
  let cartQuantity=0;
  cart.forEach((cartitem) => {
    cartQuantity+=cartitem.quantity;
  });
  return cartQuantity;
}
export function updatequantity(productId,quantity)
{
  let matchingitem;
  cart.forEach((cartitem) => {
    if(cartitem.productId === productId)
    {
      matchingitem=cartitem;
    }
  });
  if(quantity<=0)
  {
    alert('Enter Valid Input');
  }
  else if(quantity>=1000)
  {
    alert('Not Possible Quantity');
  }
  else
  {
    if(matchingitem)
    {
      matchingitem.quantity=Number(quantity);
    }
    savetostorage();
  }
}
export function updatedeliveryOption(productId,deliveryOptionId)
{
  let matchingitem;
  cart.forEach((cartitem) => {
    if(productId === cartitem.productId)
    {
      matchingitem=cartitem;
    }
  });
  matchingitem.deliveryOptionId = deliveryOptionId;
  savetostorage();
}