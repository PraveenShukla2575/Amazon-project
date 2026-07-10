export const cart = [{
  productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity:2
},{
  productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity:1
}];
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
    quantity:Number(quantity_to_add)
    });
  }
}