function Cart(localStorageKey)
{
  const cart = {
    cartItems : undefined,
    loadFromStorage()
    {
      this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
      if(!this.cartItems)
      {
        this.cartItems = [{
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
    },
    savetostorage()
    {
      localStorage.setItem(localStorageKey,JSON.stringify(this.cartItems));
    },

    addtocart(productId,quantity_to_add=1)
    {
      let matchingitem;
      this.cartItems.forEach((cartitem) => {
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
        this.cartItems.push({
        productId:productId,
        quantity:Number(quantity_to_add),
        deliveryOptionId : '1'
        });
      }
      this.savetostorage();

    },
    removefromcart(productId)
    {
      const newCart = [];
      this.cartItems.forEach((cartitem) => {
        if(cartitem.productId != productId)
        {
          newCart.push(cartitem);
        }
      });
      this.cartItems = newCart;
      this.savetostorage();
    },

    total_item_in_cart()
    {
      let total_items=0;
      this.cartItems.forEach((cartitem) => {
        total_items+=Number(cartitem.quantity);
      });
      return total_items;
    },

    calculatecart_quantity()
    {
      let cartQuantity=0;
      this.cartItems.forEach((cartitem) => {
        cartQuantity+=cartitem.quantity;
      });
      return cartQuantity;
    },

    updatequantity(productId,quantity)
    {
      let matchingitem;
      this.cartItems.forEach((cartitem) => {
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
        this.savetostorage();
      }
    },

    updatedeliveryOption(productId,deliveryOptionId)
    {
      let matchingitem;
      this.cartItems.forEach((cartitem) => {
        if(productId === cartitem.productId)
        {
          matchingitem=cartitem;
        }
      });
      matchingitem.deliveryOptionId = deliveryOptionId;
      this.savetostorage();
    }
  };
  return cart;
}

const cart=Cart('cart-oop');
const businessCart=Cart('cart-business');
// const cart = {
//   cartItems : undefined,
//   loadFromStorage()
//   {
//     this.cartItems = JSON.parse(localStorage.getItem('cart-oop'));
//     if(!this.cartItems)
//     {
//       this.cartItems = [{
//       productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
//       quantity:2,
//       deliveryOptionId : '1'
//       },
//       {
//         productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
//         quantity:1,
//         deliveryOptionId : '2'
//       }];
//     }
//   },
//   savetostorage()
//   {
//     localStorage.setItem('cart-oop',JSON.stringify(this.cartItems));
//   },

//   addtocart(productId,quantity_to_add=1)
//   {
//     let matchingitem;
//     this.cartItems.forEach((cartitem) => {
//       if(productId === cartitem.productId)
//       {
//         matchingitem=cartitem;
//       }
//     });
//     if(matchingitem)
//     {
//       matchingitem.quantity+=Number(quantity_to_add);
//     }
//     else
//     {
//       this.cartItems.push({
//       productId:productId,
//       quantity:Number(quantity_to_add),
//       deliveryOptionId : '1'
//       });
//     }
//     this.savetostorage();

//   },
//   removefromcart(productId)
//   {
//     const newCart = [];
//     this.cartItems.forEach((cartitem) => {
//       if(cartitem.productId != productId)
//       {
//         newCart.push(cartitem);
//       }
//     });
//     this.cartItems = newCart;
//     this.savetostorage();
//   },

//   total_item_in_cart()
//   {
//     let total_items=0;
//     this.cartItems.forEach((cartitem) => {
//       total_items+=Number(cartitem.quantity);
//     });
//     return total_items;
//   },

//   calculatecart_quantity()
//   {
//     let cartQuantity=0;
//     this.cartItems.forEach((cartitem) => {
//       cartQuantity+=cartitem.quantity;
//     });
//     return cartQuantity;
//   },

//   updatequantity(productId,quantity)
//   {
//     let matchingitem;
//     this.cartItems.forEach((cartitem) => {
//       if(cartitem.productId === productId)
//       {
//         matchingitem=cartitem;
//       }
//     });
//     if(quantity<=0)
//     {
//       alert('Enter Valid Input');
//     }
//     else if(quantity>=1000)
//     {
//       alert('Not Possible Quantity');
//     }
//     else
//     {
//       if(matchingitem)
//       {
//         matchingitem.quantity=Number(quantity);
//       }
//       this.savetostorage();
//     }
//   },

//   updatedeliveryOption(productId,deliveryOptionId)
//   {
//     let matchingitem;
//     this.cartItems.forEach((cartitem) => {
//       if(productId === cartitem.productId)
//       {
//         matchingitem=cartitem;
//       }
//     });
//     matchingitem.deliveryOptionId = deliveryOptionId;
//     this.savetostorage();
//   }
// };

cart.loadFromStorage();
businessCart.loadFromStorage();
console.log(cart);
console.log(businessCart);


