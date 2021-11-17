import React, { useEffect } from "react";
import { idbPromise } from "../../utils/helpers"
import CartItem from "../CartItem";
import Auth from "../../utils/auth";
import { useStoreContext } from "../../utils/GlobalState";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import "./style.css";
import { GiGiantSquid } from "react-icons/gi";
import StripeCheckout from "react-stripe-checkout";

const Cart = () => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    };

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach(item => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        
          <GiGiantSquid />
      </div>
    );
  }

  function handleToken(token, addresses) {
    console.log({ token, addresses })
  };

  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>[close]</div>
      <h2>Shopping Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map(item => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>

            {
              Auth.loggedIn() ?
                  <StripeCheckout 
                    stripeKey="pk_test_51JwqIAJwkTHmyJpJFc2gNjEsrUltjUeSIoanSv7FwqkHZaTXoclo4ezPBQq2E9mImgpvXYxHTiJPPJtOnmyTNxYe00exK5Pt8u"
                    token={handleToken}
                    billingAddress
                    shippingAddress
                    
                  />
              
                :
                <span>(log in to check out)</span>
            }
          </div>
        </div>
      ) : (
          <h3>
          No products in the cart
          </h3>
        )}
    </div>
  );
};

export default Cart;
