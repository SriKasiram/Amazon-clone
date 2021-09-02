import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
function Product({ title, image, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>*</p>
            ))}
        </div>
      </div>
      <img className="product_img" src={image} />
      <button onClick={addToCart} className="product_button">
        Add to cart
      </button>
    </div>
  );
}

export default Product;
