import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
function CheckoutProduct({ image, price, rating, title }) {
  const [{ cart }, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      title: title,
    });
  };
  return (
    <div className="checkoutproduct">
      <img className="checkoutproduct_img" src={image} />
      <div className="checkoutProduct_info">
        <p className="checkoutproduct_title">{title}</p>
        <p className="checkoutproduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutproduct_rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>*</p>
            ))}
        </div>
        <button onClick={removeFromCart} className="checkoutproduct_button">
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
