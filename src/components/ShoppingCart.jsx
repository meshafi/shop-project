import React from "react";
import { useCart } from "./CartContext";
const ShoppingCart = () => {
  const { state, dispatch } = useCart();
  const removeFromCart = (item) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { name: item.name, price: item.price },
    });
  };
  return (
    <>
      <div className="content-hider"> </div>
      <div className="shopping-cart">
        <h3>Your Cart</h3>
        <div className="items-cart">
          {state.items.map((item) => (
            <ul>
              <img
                src={
                  "https://shop.polymer-project.org/esm-bundled/" +
                  `${item.image}`
                }
              />
              <li key={item.title}>
                {item.name} - <b>${item.price.toFixed(2)}</b>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </li>
            </ul>
          ))}
          <p>Total:${state.total.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
